package com.xw.taes.commons.util;

import java.io.IOException;
import java.io.InputStream;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Properties;

/**
 * ר�������������ݿ���࣬ͨ���ⲿ�����ļ�jdbc.properties����ȡ���ݿ����Ҫ������Ϣ
 * @author ��ΰ
 *
 */
public class DBConnection {
    private Connection conn;
	private static Properties pro=new Properties();
	static{
		try {
			InputStream io=DBConnection.class.getClassLoader().getResourceAsStream("jdbc.properties");
			pro.load(io);
			Class.forName(pro.getProperty("jdbc.driverClass"));
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	
	
	public Connection getConnection() throws SQLException{
		conn=DriverManager.getConnection(pro.getProperty("jdbc.url"),pro.getProperty("jdbc.username"),pro.getProperty("jdbc.password"));
		return conn;
	}
	
	
	public void release(ResultSet rs,Statement st,Connection conn) throws Exception{
		if(rs!=null){
			rs.close();
		}
		if(st!=null){
			st.close();
		}
		if(conn!=null){
			conn.close();
		}
	}
}