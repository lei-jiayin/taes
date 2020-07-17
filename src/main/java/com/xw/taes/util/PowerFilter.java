package com.xw.taes.util;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

public class PowerFilter implements Filter{
	public void doFilter(ServletRequest req, ServletResponse resp, FilterChain chain)
			throws IOException, ServletException {
		HttpServletRequest request = (HttpServletRequest) req;
		HttpServletResponse response = (HttpServletResponse) resp;

		// 取得根目录的绝对路径

		String currentURL = request.getRequestURI();
		System.out.println("当前请求的路径: " + currentURL);
		// 截取到访问的相对路径，可以通过这个来进行相应的权限控制

		currentURL = currentURL.substring(currentURL.indexOf("/", 1), currentURL.length());
		System.out.println("当前请求的路径: " + currentURL);

		if ("/warden/wardenLog.jsp".equals(currentURL) || 
			"/warden/wardenLog.jsp" == currentURL || 
			"/index.jsp".equals(currentURL) || 
			"/index.jsp" == currentURL || 
			"/sLogin.jsp".equals(currentURL) || 
			"/sLogin.jsp"== currentURL ||
			"/tLogin.jsp".equals(currentURL) ||
			"/tLogin.jsp" == currentURL
				) {

			// 所有人都能请求到的URI，放行

			chain.doFilter(request, response);
		} else { // 下面是判断是否有session，也就是用户是否已登录状态；

			HttpSession session = request.getSession();

			Object obj = session.getAttribute("warden");

			if (obj == null) {

				System.out.println("URI:" + currentURL + ">>>>访问被拒绝！");

				response.sendRedirect("/Taes/warden/wardenLog.jsp");
			} else {
				chain.doFilter(request, response);
			}
		}
	}

	@Override
	public void destroy() {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void init(FilterConfig arg0) throws ServletException {
		// TODO Auto-generated method stub
		
	}
}
