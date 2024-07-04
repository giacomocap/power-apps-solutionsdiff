using DiffToolFramework.Models;
using LiteDB;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DiffToolFramework.DataAccess
{
    public class ConnectionStringDataAccess
    {
        public class XrmConnectionStringComparer : IEqualityComparer<XrmConnectionString>
        {
            public bool Equals(XrmConnectionString x, XrmConnectionString y)
            {
                return x.IpAddress + "," + x.OrganizationUrl == y.IpAddress + "," + y.OrganizationUrl;
            }

            public int GetHashCode(XrmConnectionString obj)
            {
                if (Object.ReferenceEquals(obj, null))
                    return 0;
                return (obj.IpAddress + "," + obj.OrganizationUrl).GetHashCode();
            }
        }

        public class XrmConnectionGuidComparer : IEqualityComparer<XrmConnectionString>
        {
            public bool Equals(XrmConnectionString x, XrmConnectionString y)
            {
                return x.Id == y.Id;
            }

            public int GetHashCode(XrmConnectionString obj)
            {
                if (Object.ReferenceEquals(obj, null))
                    return 0;
                return obj.Id.GetHashCode();
            }
        }

        const string dbName = @"D:\ProgramData\Repos\DiffToolDynamics\DiffToolFramework\App_Data\DiffTool.db";

        public async Task<IEnumerable<XrmConnectionString>> GetConnectionStrings(string ip)
        {
            using var db = new LiteDatabase(dbName);
            var dbConnec = db.GetCollection<XrmConnectionString>("XrmConnectionStrings").Query().Where(e => e.IpAddress == ip);
            var res = dbConnec.ToList();
            db.Dispose();
            return res;
        }

        public async Task<XrmConnectionString> Get(Guid id)
        {
            using var db = new LiteDatabase(dbName);
            var existingConnection = db.GetCollection<XrmConnectionString>("XrmConnectionStrings").FindOne(e => e.Id == id);
            db.Dispose();
            return existingConnection;
        }

        public async Task<IEnumerable<XrmConnectionString>> GetByIDs(IEnumerable<Guid> id)
        {
            using var db = new LiteDatabase(dbName);
            var existingConnections = db.GetCollection<XrmConnectionString>("XrmConnectionStrings").Query().Where(e => id.Any(a => a == e.Id));
            var res = existingConnections.ToList();
            db.Dispose();
            return res;
        }
        public async Task AddUpdateConnectionStrings(XrmConnectionString connection)
        {
            using var db = new LiteDatabase(dbName);
            var connections = db.GetCollection<XrmConnectionString>("XrmConnectionStrings");
            if (connection.Id != null && connection.Id != Guid.Empty)
            {
                var existingConnection = connections.FindOne(e => e.Id == connection.Id);
                if (existingConnection != null)
                {
                    existingConnection = connection;
                    connections.Update(existingConnection);
                }
                else
                {
                    connections.Insert(connection);
                }
            }
            else
            {
                connection.Id = Guid.NewGuid();
                connections.Insert(connection);
            }
            db.Dispose();
            return;
        }
    }
}
