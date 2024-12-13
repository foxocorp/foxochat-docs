FROM busybox:stable

COPY index.html /var/www/html/index.html

# Write httpd configuration.
RUN <<EOF cat >> /var/www/httpd.conf
H:/var/www/html
I:index.html
E404:index.html
EOF

ENTRYPOINT [ "/bin/httpd" ]
CMD [ "-f", "-p80", "-c/var/www/httpd.conf" ]
