package com.xw.taes;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.ConfigurableApplicationContext;

@SpringBootApplication
@EnableCaching
@MapperScan("com.xw.taes.*.dao")
public class TaesApplication {

    public static void main(String[] args) {
        // 返回IOC容器
        ConfigurableApplicationContext run = SpringApplication.run(TaesApplication.class, args);

        // 查看容器里的组件
        String[] beanDefinitionNames = run.getBeanDefinitionNames();
        for(String name:beanDefinitionNames){
            //System.out.println(name);
        }
    }

}
