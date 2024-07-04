using Microsoft.Data.SqlClient;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ServiceFramework.DataAccess
{
    public static class SqlHelper
    {
        public static IDataReader ExecuteScalar(SqlConnection connection, System.Data.CommandType commandType, string query, SqlParameter[] parameters)
        {
            using (SqlCommand cmd = new SqlCommand(query, connection))
            {
                cmd.CommandType = commandType;
                cmd.Parameters.Clear();
                foreach (var param in parameters)
                {
                    cmd.Parameters.Add(param);
                }
                SqlDataReader reader = cmd.ExecuteReader();
                return reader;
            }
        }

        public static async Task<IDataReader> ExecuteScalarAsync(SqlConnection connection, System.Data.CommandType commandType, string query, SqlParameter[] parameters)
        {
            using (SqlCommand cmd = new SqlCommand(query, connection))
            {
                cmd.CommandType = commandType;
                cmd.Parameters.Clear();
                foreach (var param in parameters)
                {
                    cmd.Parameters.Add(param);
                }
                SqlDataReader reader = await cmd.ExecuteReaderAsync();
                return reader;
            }
        }

        public static void OpenConnection(SqlConnection connection)
        {
            if (connection != null && connection.State != ConnectionState.Open)
                connection.Open();
        }

        public static void CloseConnection(SqlConnection connection)
        {
            if (connection != null && connection.State == ConnectionState.Open)
                connection.Close();
        }



    }
}
