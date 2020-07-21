package com.xw.taes.commons.util;

import java.beans.PropertyDescriptor;
import java.lang.reflect.Method;

import net.sf.json.JSONObject;
import net.sf.json.JsonConfig;
import net.sf.json.processors.JsonValueProcessor;

public class ObjectJsonValueProcessor implements JsonValueProcessor {

	 /** 
     * ��Ҫ���µ��ֶ����� 
     */  
    private String[] properties;  
      
    /** 
     * ��Ҫ������ĸ����������� 
     */  
    private Class<?> clazz;  
      
    /** 
     * ���췽��,�������� 
     * @param properties 
     * @param clazz 
     */  
    public ObjectJsonValueProcessor(String[] properties,Class<?> clazz){  
        this.properties = properties;  
        this.clazz =clazz;  
    }  
  
    @Override  
    public Object processArrayValue(Object value, JsonConfig jsonConfig) {  
        return "";  
    }  
  
    @Override  
    public Object processObjectValue(String key, Object value, JsonConfig jsonConfig) {  
        PropertyDescriptor pd = null;  
        Method method = null;  
        StringBuffer json = new StringBuffer("{");  
        try{  
            for(int i=0;i<properties.length;i++){  
                pd = new PropertyDescriptor(properties[i], clazz);  
                method = pd.getReadMethod();  
                String v = String.valueOf(method.invoke(value));  
                json.append("'"+properties[i]+"':'"+v+"'");  
                json.append(i != properties.length-1?",":"");  
            }  
            json.append("}");  
        }catch (Exception e) {  
            e.printStackTrace();  
        }  
        return JSONObject.fromObject(json.toString());  
    }  
      

}
