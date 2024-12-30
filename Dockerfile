FROM busybox:stable

COPY www /var/www/html/

RUN <<EOF cat >> /var/www/httpd.conf
H:/var/www/html
I:index.html
E404:index.html
EOF

ENTRYPOINT [ "/bin/httpd" ]
CMD [ "-f", "-p80", "-c/var/www/httpd.conf" ]
