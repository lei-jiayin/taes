package com.xw.taes.commons.util;

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

		// ȡ�ø�Ŀ¼�ľ���·��

		String currentURL = request.getRequestURI();
		System.out.println("��ǰ�����·��: " + currentURL);
		// ��ȡ�����ʵ����·��������ͨ�������������Ӧ��Ȩ�޿���

		currentURL = currentURL.substring(currentURL.indexOf("/", 1), currentURL.length());
		System.out.println("��ǰ�����·��: " + currentURL);

		if ("/warden/wardenLog.jsp".equals(currentURL) || 
			"/warden/wardenLog.jsp" == currentURL || 
			"/index.jsp".equals(currentURL) || 
			"/index.jsp" == currentURL || 
			"/sLogin.jsp".equals(currentURL) || 
			"/sLogin.jsp"== currentURL ||
			"/tLogin.jsp".equals(currentURL) ||
			"/tLogin.jsp" == currentURL
				) {

			// �����˶������󵽵�URI������

			chain.doFilter(request, response);
		} else { // �������ж��Ƿ���session��Ҳ�����û��Ƿ��ѵ�¼״̬��

			HttpSession session = request.getSession();

			Object obj = session.getAttribute("warden");

			if (obj == null) {

				System.out.println("URI:" + currentURL + ">>>>���ʱ��ܾ���");

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
