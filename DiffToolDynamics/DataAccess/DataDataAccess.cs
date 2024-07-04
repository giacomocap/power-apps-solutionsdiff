﻿using DiffToolDynamics.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace DiffToolDynamics.DataAccess
{
    public class DataDataAccess : BaseDataAccess
    {
        const string getSolutions = @"select uniquename as UniqueName, version as Version, versionnumber as VersionNumber,createdon as CreatedOn,modifiedon as ModifiedOn,ismanaged as IsManaged
from solution
where isvisible=1 
and uniquename NOT LIKE 'msdyn%'";

        const string getDetails = @"SELECT   t.componenttypename AS LogicalName,
         ModifiedOn,
         Version,
         COALESCE (attrEntity, queryEntity, mr1Entity, mr3Entity, mr2Entity, formEntity) AS EntityReference,
         COALESCE (entityName, roleName, steppluginName, assemblyName, attrName, formName, viewName, onetonName, ntooneName, ntonName, webresName, optsetName) AS DisplayName
FROM     (SELECT s.versionnumber AS SolutionVersion,
                 sf.objecttypecodename AS formEntity,
                 mr2.referencedentity AS mr2Entity,
                 mr3.entity1logicalname AS mr3Entity,
                 ma.entitylogicalname AS attrEntity,
                 sq.returnedtypecodename AS queryEntity,
                 mr1.referencedentity AS mr1Entity,
                 sc.objectid,
                 sc.modifiedon AS ModifiedOn,
                 sc.versionnumber AS Version,
                 sc.componenttypename,
                 r.name AS roleName,
                 sm.name AS steppluginName,
                 p.name AS assemblyName,
                 m.schemaname AS entityName,
                 ma.schemaname AS attrName,
                 sf.name AS formName,
                 sq.name AS viewName,
                 mr1.schemaname AS onetonName,
                 mr2.schemaname AS ntooneName,
                 mr3.schemaname AS ntonName,
                 w.name AS webresName,
                 mg.name AS optsetName
          FROM   solution AS s
                 INNER JOIN
                 solutioncomponent AS sc
                 ON s.solutionid = sc.solutionid
                 LEFT OUTER JOIN
                 Metadata.entity AS m
                 ON sc.objectid = m.metadataid
                 LEFT OUTER JOIN
                 metadata.attribute AS ma
                 ON sc.objectid = ma.metadataid
                 LEFT OUTER JOIN
                 systemform AS sf
                 ON sc.objectid = sf.formid
                 LEFT OUTER JOIN
                 savedquery AS sq
                 ON sc.objectid = sq.savedqueryid
                 LEFT OUTER JOIN
                 metadata.relationship_1_n AS mr1
                 ON sc.objectid = mr1.metadataid
                 LEFT OUTER JOIN
                 metadata.relationship_n_1 AS mr2
                 ON sc.objectid = mr2.metadataid
                 LEFT OUTER JOIN
                 metadata.relationship_n_n AS mr3
                 ON sc.objectid = mr3.metadataid
                 LEFT OUTER JOIN
                 webresource AS w
                 ON sc.objectid = w.webresourceid
                 LEFT OUTER JOIN
                 metadata.globaloptionset AS mg
                 ON sc.objectid = mg.metadataid
                 LEFT OUTER JOIN
                 role AS r
                 ON sc.objectid = r.roleid
                 LEFT OUTER JOIN
                 sdkmessage AS sm
                 ON sc.objectid = sm.sdkmessageid
                 LEFT OUTER JOIN
                 pluginassembly AS p
                 ON sc.objectid = p.pluginassemblyid
          WHERE  s.uniquename = '{0}') AS t
ORDER BY LogicalName;
";

        const string getDetailsInClause = @"SELECT   SolName,
         t.componenttypename AS LogicalName,
         ModifiedOn,
         Version,
         COALESCE (attrEntity, queryEntity, mr1Entity, mr3Entity, mr2Entity, formEntity) AS EntityReference,
         COALESCE (entityName, roleName, steppluginName, assemblyName, attrName, formName, viewName, onetonName, ntooneName, ntonName, webresName, optsetName) AS DisplayName
FROM     (SELECT s.uniquename AS SolName,
                 s.versionnumber AS SolutionVersion,
                 sf.objecttypecodename AS formEntity,
                 mr2.referencedentity AS mr2Entity,
                 mr3.entity1logicalname AS mr3Entity,
                 ma.entitylogicalname AS attrEntity,
                 sq.returnedtypecodename AS queryEntity,
                 mr1.referencedentity AS mr1Entity,
                 sc.objectid,
                 sc.modifiedon AS ModifiedOn,
                 sc.versionnumber AS Version,
                 sc.componenttypename,
                 r.name AS roleName,
                 sm.name AS steppluginName,
                 p.name AS assemblyName,
                 m.schemaname AS entityName,
                 ma.schemaname AS attrName,
                 sf.name AS formName,
                 sq.name AS viewName,
                 mr1.schemaname AS onetonName,
                 mr2.schemaname AS ntooneName,
                 mr3.schemaname AS ntonName,
                 w.name AS webresName,
                 mg.name AS optsetName
          FROM   solution AS s
                 INNER JOIN
                 solutioncomponent AS sc
                 ON s.solutionid = sc.solutionid
                 LEFT OUTER JOIN
                 Metadata.entity AS m
                 ON sc.objectid = m.metadataid
                 LEFT OUTER JOIN
                 metadata.attribute AS ma
                 ON sc.objectid = ma.metadataid
                 LEFT OUTER JOIN
                 systemform AS sf
                 ON sc.objectid = sf.formid
                 LEFT OUTER JOIN
                 savedquery AS sq
                 ON sc.objectid = sq.savedqueryid
                 LEFT OUTER JOIN
                 metadata.relationship_1_n AS mr1
                 ON sc.objectid = mr1.metadataid
                 LEFT OUTER JOIN
                 metadata.relationship_n_1 AS mr2
                 ON sc.objectid = mr2.metadataid
                 LEFT OUTER JOIN
                 metadata.relationship_n_n AS mr3
                 ON sc.objectid = mr3.metadataid
                 LEFT OUTER JOIN
                 webresource AS w
                 ON sc.objectid = w.webresourceid
                 LEFT OUTER JOIN
                 metadata.globaloptionset AS mg
                 ON sc.objectid = mg.metadataid
                 LEFT OUTER JOIN
                 role AS r
                 ON sc.objectid = r.roleid
                 LEFT OUTER JOIN
                 sdkmessage AS sm
                 ON sc.objectid = sm.sdkmessageid
                 LEFT OUTER JOIN
                 pluginassembly AS p
                 ON sc.objectid = p.pluginassemblyid
          WHERE  s.uniquename in {0}) AS t
ORDER BY LogicalName;
";

        public async Task<IEnumerable<SolutionsForConnectionString>> GetSolutionsForConnections(IEnumerable<ConnectionStringRequest> ids, CancellationToken cancellationToken)
        {
            //var connectionDataAccess = new ConnectionStringDataAccess();
            List<SolutionsForConnectionString> toReturn = new List<SolutionsForConnectionString>();
            if (ids.Count() > 0)
            {
                try
                {
                    var connections = ids.Select(conn => new XrmConnectionString(conn));
                    var tasks = connections.AsParallel().Select(async (connectionString, i) =>
                    {
                        try
                        {
                            var solutionsForConnectionString = new SolutionsForConnectionString() { ConnectionStringId = connectionString.Id, Url = connectionString.OrganizationUrl };
                            var stringConnection = CreateConnectionString(connectionString);
                            var solutions = await ExecuteSql<Solution>(getSolutions, stringConnection, cancellationToken);
                            solutionsForConnectionString.Solutions = solutions;
                            toReturn.Add(solutionsForConnectionString);
                        }
                        catch (Exception e)
                        {

                            throw;
                        }

                    });
                    await Task.WhenAll(tasks);
                }
                catch (Exception e)
                {

                    throw;
                }
            }
            return toReturn;
        }

        public async Task<IEnumerable<SolutionDetailsForConnectionString>> GetSolutionsDetailsForConnections(IEnumerable<ConnectionStringRequest> ids, string name, CancellationToken cancellationToken)
        {
            var connectionDataAccess = new ConnectionStringDataAccess();
            List<SolutionDetailsForConnectionString> toReturn = new List<SolutionDetailsForConnectionString>();
            if (ids.Count() > 0)
            {
                try
                {
                    var connections = ids.Select(conn => new XrmConnectionString(conn));
                    var tasks = connections.AsParallel().Select(async (connectionString, i) =>
                    {
                        try
                        {
                            var solutionsForConnectionString = new SolutionDetailsForConnectionString() { ConnectionStringId = connectionString.Id, Url = connectionString.OrganizationUrl };
                            var stringConnection = GetOrgServiceConnectionString(connectionString);
                            var solutions = await ExecuteSqlOnXrm<SolutionDetail>(string.Format(getDetails, name), stringConnection, cancellationToken);
                            solutionsForConnectionString.SolutionDetails = solutions;
                            toReturn.Add(solutionsForConnectionString);
                        }
                        catch (Exception e)
                        {

                            throw;
                        }

                    });
                    await Task.WhenAll(tasks);
                }
                catch (Exception e)
                {

                    throw;
                }
            }
            return toReturn;
        }



        public async Task<IEnumerable<ElementDetailsForSolution>> GetSolutionsDetails(ConnectionStringRequest ids, IEnumerable<string> names, CancellationToken cancellationToken)
        {
            var connectionDataAccess = new ConnectionStringDataAccess();
            List<ElementDetailsForSolution> toReturn = new List<ElementDetailsForSolution>();
            if (ids != null)
            {
                try
                {
                    var connectionString = new XrmConnectionString(ids);
                    StringBuilder builder = new StringBuilder();
                    builder.Append("(");
                    foreach (string solName in names)
                        builder.Append($"'{solName}', ");
                    builder.Append(")");
                    string whereCondition = builder.ToString().Replace(", )", ")");

                    var stringConnection = GetOrgServiceConnectionString(connectionString);
                    var solutions = await ExecuteSqlOnXrm<SolutionDetailExpand>(string.Format(getDetailsInClause, whereCondition), stringConnection, cancellationToken);

                    var groupedBySol = solutions.GroupBy(e => e.SolName);

                    foreach (var elements in groupedBySol)
                    {
                        if (cancellationToken.IsCancellationRequested)
                            throw new TaskCanceledException();
                        var solutionsForConnectionString = new ElementDetailsForSolution() { SolutionName = elements.Key };
                        solutionsForConnectionString.SolutionDetails = elements.Select(e => new SolutionDetail(e));
                        toReturn.Add(solutionsForConnectionString);
                    }

                    //var tasks = names.AsParallel().Select(async (solutionName, i) =>
                    //{
                    //    try
                    //    {
                    //        var solutionsForConnectionString = new ElementDetailsForSolution() { SolutionName = solutionName };
                    //        var stringConnection = GetOrgServiceConnectionString(connectionString);
                    //        var solutions = await ExecuteSqlOnXrm<SolutionDetail>(string.Format(getDetailsInClause, whereCondition), stringConnection, cancellationToken);

                    //        solutionsForConnectionString.SolutionDetails = solutions;
                    //        toReturn.Add(solutionsForConnectionString);
                    //    }
                    //    catch (Exception e)
                    //    {

                    //        throw;
                    //    }

                    //});
                    //await Task.WhenAll(tasks);
                }
                catch (Exception e)
                {

                    throw;
                }
            }
            return toReturn;
        }


        private string CreateConnectionString(XrmConnectionString connectionString)
        {
            return string.Format(@"Server={0},5558; Authentication=Active Directory Service Principal; User Id={1}; Password={2}", connectionString.OrganizationUrl, connectionString.ClientId, connectionString.Secret);
        }
    }
}
