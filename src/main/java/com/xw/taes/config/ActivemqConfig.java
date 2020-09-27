package com.xw.taes.config;

import org.apache.activemq.command.ActiveMQQueue;
import org.apache.activemq.command.ActiveMQTopic;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jms.annotation.EnableJms;

import javax.jms.Queue;
import javax.jms.Topic;

/**
 * 消息队列配置
 * @author adv
 * @date 2020/9/27 11:52
 */
@Configuration
@EnableJms
public class ActivemqConfig {

    @Value("${myqueue}")
    private String myQueue;

    @Value("${mytopic}")
    private String myTopic;

    @Bean
    public Queue queue(){
        return new ActiveMQQueue(myQueue);
    }
    @Bean
    public Topic topic(){
        return new ActiveMQTopic(myTopic);
    }

}
