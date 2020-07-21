package com.xw.taes.commons.util;

import java.awt.Color;
import java.awt.Font;
import java.awt.Graphics;
import java.awt.image.BufferedImage;
import java.awt.image.RenderedImage;
import java.io.FileOutputStream;
import java.io.OutputStream;
import java.util.HashMap;
import java.util.Map;
import java.util.Random;

import javax.imageio.ImageIO;

public class CodeUtil {
	private static int width = 90;// ����ͼƬ��width
	     private static int height = 20;// ����ͼƬ��height
	     private static int codeCount = 4;// ����ͼƬ����ʾ��֤��ĸ���
	     private static int xx = 15;
	     private static int fontHeight = 18;
	     private static  int codeY = 16;
	     private static char[] codeSequence = { 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
	             'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' };
	     
	     /**
	      * ����һ��map����
	      * codeΪ���ɵ���֤��
	      * codePicΪ���ɵ���֤��BufferedImage����
	      * @return
	      */
	     public static Map<String,Object> generateCodeAndPic() {
	         // ����ͼ��buffer
	         BufferedImage buffImg = new BufferedImage(width, height, BufferedImage.TYPE_INT_RGB);
	         // Graphics2D gd = buffImg.createGraphics();
	         // Graphics2D gd = (Graphics2D) buffImg.getGraphics();
	         Graphics gd = buffImg.getGraphics();
	        // ����һ���������������
	         Random random = new Random();
	         // ��ͼ�����Ϊ��ɫ
	         gd.setColor(Color.WHITE);
	         gd.fillRect(0, 0, width, height);
	 
	         // �������壬����Ĵ�СӦ�ø���ͼƬ�ĸ߶�������
	         Font font = new Font("Fixedsys", Font.BOLD, fontHeight);
	         // �������塣
	         gd.setFont(font);
	 
	         // ���߿�
	         gd.setColor(Color.BLACK);
	         gd.drawRect(0, 0, width - 1, height - 1);
	 
	         // �������40�������ߣ�ʹͼ���е���֤�벻�ױ���������̽�⵽��
	         gd.setColor(Color.BLACK);
	         for (int i = 0; i < 30; i++) {
	             int x = random.nextInt(width);
	             int y = random.nextInt(height);
	             int xl = random.nextInt(12);
	             int yl = random.nextInt(12);
             gd.drawLine(x, y, x + xl, y + yl);
	         }
	 
	         // randomCode���ڱ��������������֤�룬�Ա��û���¼�������֤��
	         StringBuffer randomCode = new StringBuffer();
	         int red = 0, green = 0, blue = 0;
	 
	         // �������codeCount���ֵ���֤�롣
	         for (int i = 0; i < codeCount; i++) {
	             // �õ������������֤�����֡�
	             String code = String.valueOf(codeSequence[random.nextInt(36)]);
	             // �����������ɫ������������ɫֵ�����������ÿλ���ֵ���ɫֵ������ͬ��
	             red = random.nextInt(255);
	             green = random.nextInt(255);
	             blue = random.nextInt(255);
	 
	             // �������������ɫ����֤����Ƶ�ͼ���С�
	             gd.setColor(new Color(red, green, blue));
	             gd.drawString(code, (i + 1) * xx, codeY);
	 
	             // ���������ĸ�����������һ��
	             randomCode.append(code);
	         }
	         Map<String,Object> map  =new HashMap<String,Object>();
	         //�����֤��
	         map.put("code", randomCode);
	         //������ɵ���֤��BufferedImage����
	         map.put("codePic", buffImg);
	         return map;
	     }
	 
	     public static void main(String[] args) throws Exception {
	         //�����ļ����������
	         OutputStream out = new FileOutputStream("D://img/"+System.currentTimeMillis()+".jpg");
	         Map<String,Object> map = CodeUtil.generateCodeAndPic();
	         ImageIO.write((RenderedImage) map.get("codePic"), "jpeg", out);
	         System.out.println("��֤���ֵΪ��"+map.get("code"));
	     }
}
