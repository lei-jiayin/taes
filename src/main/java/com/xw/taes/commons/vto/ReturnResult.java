package com.xw.taes.commons.vto;

import com.xw.taes.commons.exception.UserResponseEnum;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import net.sf.json.JSON;
import net.sf.json.JSONObject;

import javax.servlet.ServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;
import java.util.Map;

/**
 * 返回结果集
 *
 * @author adx
 * @date 2020/7/17 11:01
 */
@Data
public class ReturnResult<T> {
    @ApiModelProperty("状态码 0失败 1成功 ")
    private String code;
    @ApiModelProperty("返回信息")
    private String message;
    @ApiModelProperty("返回Object数据")
    private Object data;
    @ApiModelProperty("返回map数据")
    private Map<String, Object> map;
    @ApiModelProperty("返回list数据")
    private List<T> rows;
    private int total;
    //private int pageVto;

    public ReturnResult() {
    }

    public ReturnResult(UserResponseEnum userResponseEnum){
        this.code = userResponseEnum.getCode();
        this.message = userResponseEnum.getDescription();
    }

    public ReturnResult(String code) {
        this.code = code;
    }

    public ReturnResult(String code, Object data) {
        this.code = code;
        this.data = data;
    }

    public ReturnResult(String code, String message) {
        this.code = code;
        this.message = message;
    }

    public ReturnResult(String code, String message, Object data) {
        this.code = code;
        this.message = message;
        this.data = data;
    }

    public ReturnResult(String code, String message, Map<String, Object> map) {
        this.code = code;
        this.message = message;
        this.data = data;
        this.map = map;
    }

    public void outMessage(ServletResponse response, ReturnResult returnResult) throws IOException {
        //response.setCharacterEncoding("utf8");
        // 解决response中文乱码问题
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
        out.println(JSONObject.fromObject(returnResult).toString());
        out.flush();
        out.close();
    }
}
