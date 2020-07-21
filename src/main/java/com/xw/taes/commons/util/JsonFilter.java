package com.xw.taes.commons.util;

import net.sf.json.JsonConfig;
import net.sf.json.util.PropertyFilter;

public class JsonFilter {
    public static JsonConfig getFilter(final String[] s){
        JsonConfig config = new JsonConfig();
        config.setJsonPropertyFilter(new PropertyFilter(){
            
            public boolean apply(Object source, String name, Object value) {
             if(juge(s,name)) {
              return true;
             } else {
              return false;
             }
            }
            
            public boolean juge(String[] s,String s2){
                boolean b = false;
                for(String sl : s){
                    if(s2.equals(sl)){
                        b=true;
                    }
                }
                return b;
            }
           });
        return config;
    }
}