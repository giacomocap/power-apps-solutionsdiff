using System;
using System.Collections;
using System.Collections.Generic;
using System.Data;
using System.Dynamic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace ServiceFramework.DataAccess
{
    public static class DataMapper
    {
        public static List<T> MapListData<T>(IDataReader dr) where T : new()
        {
            Type businessEntityType = typeof(T);
            List<T> entitys = new List<T>();
            Hashtable hashtable = new Hashtable();
            PropertyInfo[] properties = businessEntityType.GetProperties();
            foreach (PropertyInfo info in properties)
            {
                hashtable[info.Name.ToUpper()] = info;
            }
            while (dr.Read())
            {
                T newObject = new T();
                for (int index = 0; index < dr.FieldCount; index++)
                {
                    PropertyInfo info = (PropertyInfo)hashtable[dr.GetName(index).ToUpper()];
                    if ((info != null) && info.CanWrite)
                    {
                        var value = dr.GetValue(index);
                        if (!(value is System.DBNull))
                            info.SetValue(newObject, dr.GetValue(index), null);
                    }
                }
                entitys.Add(newObject);
            }
            dr.Close();
            return entitys;
        }

        public static List<T> MapListDataTable<T>(DataTable dt)
        {
            var fields = typeof(T).GetFields();

            List<T> lst = new List<T>();

            foreach (DataRow dr in dt.Rows)
            {
                // Create the object of T
                var ob = Activator.CreateInstance<T>();

                foreach (var fieldInfo in fields)
                {
                    foreach (DataColumn dc in dt.Columns)
                    {
                        // Matching the columns with fields
                        if (fieldInfo.Name == dc.ColumnName)
                        {
                            // Get the value from the datatable cell
                            object value = dr[dc.ColumnName];

                            // Set the value into the object
                            fieldInfo.SetValue(ob, value);
                            break;
                        }
                    }
                }
                lst.Add(ob);
            }
            return lst;
        }

        public static IEnumerable<dynamic> MapListDynamic(IDataReader dr)
        {
            List<dynamic> entitys = new List<dynamic>();
            while (dr.Read())
            {
                dynamic newObject = new ExpandoObject();
                for (int index = 0; index < dr.FieldCount; index++)
                {
                    var value = dr.GetValue(index);
                    if (!(value is System.DBNull))
                        dynamicHelper.AddProperty(newObject, dr.GetName(index), dr.GetValue(index));
                }
                entitys.Add(newObject);
            }
            dr.Close();
            return entitys;
        }

        public static T MapData<T>(IDataReader dr) where T : new()
        {
            Type businessEntityType = typeof(T);
            Hashtable hashtable = new Hashtable();
            PropertyInfo[] properties = businessEntityType.GetProperties();
            foreach (PropertyInfo info in properties)
            {
                hashtable[info.Name.ToUpper()] = info;
            }
            T newObject = new T();
            while (dr.Read())
            {
                for (int index = 0; index < dr.FieldCount; index++)
                {
                    PropertyInfo info = (PropertyInfo)hashtable[dr.GetName(index).ToUpper()];
                    if ((info != null) && info.CanWrite)
                    {
                        info.SetValue(newObject, dr.GetValue(index), null);
                    }
                }
            }
            dr.Close();
            return newObject;
        }

        public static T MapTableItem<T>(IDataReader dr) where T : new()
        {
            Type businessEntityType = typeof(T);
            Hashtable hashtable = new Hashtable();
            PropertyInfo[] properties = businessEntityType.GetProperties().ToArray();
            foreach (PropertyInfo info in properties)
            {
                var attribute = info.Name;
                hashtable[attribute.ToUpper()] = info;
            }
            T newObject = new T();
            while (dr.Read())
            {
                for (int index = 0; index < dr.FieldCount; index++)
                {
                    PropertyInfo info = (PropertyInfo)hashtable[dr.GetName(index).ToUpper()];
                    if ((info != null) && info.CanWrite)
                    {
                        info.SetValue(newObject, dr.GetValue(index), null);
                    }
                }
            }
            dr.Close();
            return newObject;
        }

        public static List<T> MapTable<T>(IDataReader dr) where T : new()
        {
            Type businessEntityType = typeof(T);
            List<T> entitys = new List<T>();
            Hashtable hashtable = new Hashtable();
            PropertyInfo[] properties = businessEntityType.GetProperties().ToArray();
            foreach (PropertyInfo info in properties)
            {
                var attribute = info.Name;
                hashtable[attribute.ToUpper()] = info;
            }
            while (dr.Read())
            {
                T newObject = new T();
                for (int index = 0; index < dr.FieldCount; index++)
                {
                    PropertyInfo info = (PropertyInfo)hashtable[dr.GetName(index).ToUpper()];
                    if ((info != null) && info.CanWrite)
                    {
                        var value = dr.GetValue(index);
                        if (!(value is System.DBNull))
                            info.SetValue(newObject, dr.GetValue(index), null);
                    }
                }
                entitys.Add(newObject);
            }
            dr.Close();
            return entitys;
        }


    }

    public static class dynamicHelper
    {
        public static ExpandoObject convertToExpando(object obj)
        {
            //Get Properties Using Reflections
            BindingFlags flags = BindingFlags.Public | BindingFlags.Instance;
            PropertyInfo[] properties = obj.GetType().GetProperties(flags);

            //Add Them to a new Expando
            ExpandoObject expando = new ExpandoObject();
            foreach (PropertyInfo property in properties)
            {
                AddProperty(expando, property.Name, property.GetValue(obj));
            }

            return expando;
        }

        public static void AddProperty(ExpandoObject expando, string propertyName, object propertyValue)
        {
            //Take use of the IDictionary implementation
            var expandoDict = expando as IDictionary<string, object>;
            if (expandoDict.ContainsKey(propertyName))
                expandoDict[propertyName] = propertyValue;
            else
                expandoDict.Add(propertyName, propertyValue);
        }
    }
}
