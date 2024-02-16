# nginx-server.conf 配置示例

```bash
Last login: Wed Mar 25 13:23:56 on console
/Users/wxk/.bash_profile:source:1: no such file or directory: /Users/wxk/.profile
~ ᐅ ssh -l root 120.27.26.189
root@120.27.26.189's password:
Linux iZm5eh06giclmv9hhooy17Z 4.9.0-8-amd64 #1 SMP Debian 4.9.144-3.1 (2019-02-19) x86_64

Welcome to Alibaba Cloud Elastic Compute Service !

Last login: Mon Mar 23 16:40:52 2020 from 119.57.21.8
root@iZm5eh06giclmv9hhooy17Z:~# cat /etc/nginx/conf.d/server.conf
    server {
        server_name  jianfei.bvxo.cn jianfei.zhujiaxiaochi.com health.eababec.cn health.ytw188.com.cn;
        #侦听80端口
        listen       80;
        charset UTF-8;

        location / {
            root   /var/www/jianfei/;
            index index.html;

            #图片缓存30天
            location ~.*\.(jpg|png|jpeg|ico)$
            {
                expires 30d;
            }
            #js css缓存一小时
            location ~.*\.(js|css)?$
            {
                expires 1h;
            }
        }
    }

#    server {
#        server_name  game.bvxo.cn zhuanpan.bvxo.cn game.zhujiaxiaochi.com zhuanpan.zhujiaxiaochi.com;
        # 侦听80端口
#        listen       80;
#        charset UTF-8;

#        location / {
#            root   /var/www/zhuanpan/;
#            index index.html;

            #图片缓存30天
#            location ~.*\.(jpg|png|jpeg|ico)$
#            {
#                expires 30d;
#            }
            #js css缓存一小时
#            location ~.*\.(js|css)?$
#            {
#                expires 1h;
#            }
#        }
#    }

    server {
        server_name  erxi.babyseeworld.cn;
        # 侦听80端口
        listen       80;
        charset UTF-8;

        location / {
            root   /var/www/erxi/;
            index index.html;

            #图片缓存30天
            location ~.*\.(jpg|png|jpeg|ico)$
            {
                expires 30d;
            }
            #js css缓存一小时
            location ~.*\.(js|css)?$
            {
                expires 1h;
            }
        }
    }
    server {
        server_name www.erxiqinzi.com www.erxiqinzi.top www.exqzy.com www.exqzy.cn;
        # 侦听80端口
        listen       80;
        rewrite ".*" http://erxi.babayseeworld.cn;
    }

    server {
        server_name rsxyy.xinwentuan.com;
        listen       80;
        charset UTF-8;

        location / {
            root   /var/www/risecenter/web;
            index index.html;

            # ^{  ^i^g  ^s  ^x30
            location ~.*\.(jpg|png|jpeg|ico)$
            {
                expires 30d;
            }
            #js css  ^s  ^x  ^`  ^o ^w
            location ~.*\.(js|css)?$
            {
                expires 1h;
            }
        }
        location ~\.php$ {
            root   /var/www/risecenter/php/src;
            fastcgi_pass unix:/run/php/php7.0-fpm.sock;
            fastcgi_index index.php;
            fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
            include fastcgi_params;
        }
    }

    server {
        server_name rsxyy.xinwentuan.com;
        listen       443;
        charset UTF-8;
        ssl on;
        ssl_certificate   /var/www/risecenter/cert/214991818920687.pem;
        ssl_certificate_key  /var/www/risecenter/cert/214991818920687.key;
        ssl_session_timeout 5m;
        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
        ssl_prefer_server_ciphers on;

        location / {
            root   /var/www/risecenter/web;
            index index.html;

            # ^{  ^i^g  ^s  ^x30
            location ~.*\.(jpg|png|jpeg|ico)$
            {
                expires 30d;
            }
            #js css  ^s  ^x  ^`  ^o ^w
            location ~.*\.(js|css)?$
            {
                expires 1h;
            }
        }
        location ~\.php$ {
            root   /var/www/risecenter/php/src;
            fastcgi_pass unix:/run/php/php7.0-fpm.sock;
            fastcgi_index index.php;
            fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
            include fastcgi_params;
        }
    }

    server {
        server_name xq.xinwentuan.com;
        listen       443;
        charset UTF-8;
        ssl on;
        ssl_certificate   /var/www/xiqiang/cert/215009693290687.pem;
        ssl_certificate_key  /var/www/xiqiang/cert/215009693290687.key;
        ssl_session_timeout 5m;
        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
        ssl_prefer_server_ciphers on;

        location / {
            root   /var/www/xiqiang/web;
            index index.html;

            # ^{  ^i^g  ^s  ^x30
            location ~.*\.(jpg|png|jpeg|ico)$
            {
                expires 30d;
            }
            #js css  ^s  ^x  ^`  ^o ^w
            location ~.*\.(js|css)?$
            {
                expires 1h;
            }
        }
    }


    server {
        server_name zfbhb.xinwentuan.com;
        listen       80;
        charset UTF-8;

        location / {
            root   /var/www/zfbhb/web;
            index index.html;

            location ~.*\.(jpg|png|jpeg|ico)$
            {
                expires 30d;
            }

            location ~.*\.(js|css)?$
            {
                expires 1h;
            }
        }
    }

    server {
        server_name unicom.xinwentuan.com;
        listen       80;
        charset UTF-8;

        location / {
            root   /var/www/unicom/web;
            index index.html;

            location ~.*\.(jpg|png|jpeg|ico)$
            {
                expires 30d;
            }

            location ~.*\.(js|css)?$
            {
                expires 1h;
            }
        }
    }

    server {
        server_name unicom.xinwentuan.com;
        listen       443;
        charset UTF-8;
        ssl on;
        ssl_certificate   /var/www/unicom/cert/cert-1540519955230_unicom.xinwentuan.com.crt;
        ssl_certificate_key  /var/www/unicom/cert/cert-1540519955230_unicom.xinwentuan.com.key;
        ssl_session_timeout 5m;
        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
        ssl_prefer_server_ciphers on;

        location / {
            root   /var/www/unicom/web;
            index index.html;

            # ^{  ^i^g  ^s  ^x30
            location ~.*\.(jpg|png|jpeg|ico)$
            {
                expires 30d;
            }
            #js css  ^s  ^x  ^`  ^o ^w
            location ~.*\.(js|css)?$
            {
                expires 1h;
            }
        }
    }

    server {
        server_name imp.jiuyuanxx.com deeplink.jiuyuanxx.com;
        listen       80;
        charset UTF-8;

        location / {
            root   /var/www/ios-master-promotion/web;
            index index.html;

            location ~.*\.(jpg|png|jpeg|ico)$
            {
                expires 30d;
            }

            location ~.*\.(js|css)?$
            {
                expires 1h;
            }
        }
    }

    server {
        server_name imp.jiuyuanxx.com deeplink.jiuyuanxx.com;
        listen       443;
        charset UTF-8;
        ssl on;
        ssl_certificate   /var/www/ios-master-promotion/cert/2935607_imp.jiuyuanxx.com.pem;
        ssl_certificate_key  /var/www/ios-master-promotion/cert/2935607_imp.jiuyuanxx.com.key;
        ssl_session_timeout 5m;
        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
        ssl_prefer_server_ciphers on;

        location / {
            root   /var/www/ios-master-promotion/web;
            index index.html;

            # ^{  ^i^g  ^s  ^x30
            location ~.*\.(jpg|png|jpeg|ico)$
            {
                expires 30d;
            }
            #js css  ^s  ^x  ^`  ^o ^w
            location ~.*\.(js|css)?$
            {
                expires 1h;
            }
        }
        location /api/ {
            proxy_pass  http://127.0.0.1:8066/;

            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        }
        location /app/ {
            proxy_pass  http://127.0.0.1:8888/;

            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        }
    }

    server {
        server_name zhekou.xinwentuan.com zhekou.cqxmgs.com;
        listen       80;
        charset UTF-8;

        location / {
            root   /var/www/zhekou/web;
            index index.html;

            location ~.*\.(jpg|png|jpeg|ico)$
            {
                expires 30d;
            }

            location ~.*\.(js|css)?$
            {
                expires 1h;
            }
        }
    }

    server {
        server_name today.xinwentuan.com;
        listen       80;
        charset UTF-8;

        location / {
            root   /var/www/today/web;
            index index.html;

            location ~weather\.(jpg|png|jpeg)$
            {
                expires -1d;
            }

            location ~.*\.(jpg|png|jpeg|ico|ttf)$
            {
                expires 30d;
            }

            location ~.*\.(js|css)?$
            {
                expires 1h;
            }
        }
    }

    server {
        server_name md.xinwentuan.com;
        listen       80;
        charset UTF-8;

        location / {
            root   /var/www/md/web;
            index index.html;

            location ~.*\.(jpg|png|jpeg|ico)$
            {
                expires 30d;
            }

            location ~.*\.(js|css)?$
            {
                expires 1h;
            }
        }
    }
    server {
        server_name rr.xinwentuan.com;
        listen       80;
        charset UTF-8;

        location / {
            root   /var/www/rr/web;
            index index.html;

            location ~.*\.(jpg|png|jpeg|ico)$
            {
                expires 30d;
            }

            location ~.*\.(js|css)?$
            {
                expires 1h;
            }
        }
    }
    server {
        server_name gy.xinwentuan.com;
        listen       80;
        charset UTF-8;

        location / {
            root   /var/www/gy/web;
            index index.html;

            location ~.*\.(jpg|png|jpeg|ico)$
            {
                expires 30d;
            }

            location ~.*\.(js|css)?$
            {
                expires 1h;
            }
        }
    }
    server {
        server_name yike.xinwentuan.com;
        listen       80;
        charset UTF-8;

        location / {
            root   /var/www/yike/web;
            index index.html;

            location ~.*\.(jpg|png|jpeg|ico)$
            {
                expires 30d;
            }

            location ~.*\.(js|css)?$
            {
                expires 1h;
            }
        }
    }
    server {
        server_name zhaomu.sddogpets.com;
        listen       80;
        charset UTF-8;

        location / {
            root   /var/www/zhaomu/web;
            index index.html;

            location ~.*\.(jpg|png|jpeg|ico)$
            {
                expires 30d;
            }

            location ~.*\.(js|css)?$
            {
                expires 1h;
            }
        }
    }
    server {
        server_name zm.sddogpets.com;
        listen       80;
        charset UTF-8;

        location / {
            root   /var/www/zm/web;
            index index.html;

            location ~.*\.(jpg|png|jpeg|ico)$
            {
                expires 30d;
            }

            location ~.*\.(js|css)?$
            {
                expires 1h;
            }
        }
    }
    server {
        server_name test.17xiangmeili.com;
        listen       80;
        charset UTF-8;

        location / {
            root   /var/www/test/web;
            index index.html;

            location ~.*\.(jpg|png|jpeg|ico)$
            {
                expires 30d;
            }

            location ~.*\.(js|css)?$
            {
                expires 1h;
            }
        }
    }
    server {
        server_name exam.xinwentuan.com ks.sichuangvip.com ;
        listen       80;
        charset UTF-8;

        location / {
            root   /var/www/exam/web;
            index index.html;

            location ~.*\.(jpg|png|jpeg|ico)$
            {
                expires 30d;
            }

            location ~.*\.(js|css)?$
            {
                expires 1h;
            }
        }
        location ~\.(txt|log)$ {
            root   /var/www/exam/php/logs;
        }
        location ~\.php$ {
            root   /var/www/exam/php/src;
            fastcgi_pass unix:/run/php/php7.0-fpm.sock;
            fastcgi_index index.php;
            fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
            include fastcgi_params;
        }
    }
    server {
        server_name exam2.xinwentuan.com;
        listen       80;
        charset UTF-8;

        location / {
            root   /var/www/exam2/web;
            index index.html;

            location ~.*\.(jpg|png|jpeg|ico)$
            {
                expires 30d;
            }

            location ~.*\.(js|css)?$
            {
                expires 1h;
            }
        }
        location ~\.(txt|log)$ {
            root   /var/www/exam2/php/logs;
        }
        location ~\.php$ {
            root   /var/www/exam2/php/src;
            fastcgi_pass unix:/run/php/php7.0-fpm.sock;
            fastcgi_index index.php;
            fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
            include fastcgi_params;
        }
    }
    server {
        server_name exam3.xinwentuan.com;
        listen       80;
        charset UTF-8;

        location / {
            root   /var/www/exam3/web;
            index index.html;

            location ~.*\.(jpg|png|jpeg|ico)$
            {
                expires 30d;
            }

            location ~.*\.(js|css)?$
            {
                expires 1h;
            }
        }
        location ~\.(txt|log)$ {
            root   /var/www/exam3/php/logs;
        }
        location ~\.php$ {
            root   /var/www/exam3/php/src;
            fastcgi_pass unix:/run/php/php7.0-fpm.sock;
            fastcgi_index index.php;
            fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
            include fastcgi_params;
        }
    }
    server {
        server_name kanfang.xinwentuan.com;
        listen       80;
        charset UTF-8;

        location / {
            root   /var/www/kanfang/web;
            index index.html;

            location ~.*\.(jpg|png|jpeg|ico)$
            {
                expires 30d;
            }

            location ~.*\.(js|css)?$
            {
                expires 1h;
            }
        }
        location ~\.php$ {
            root   /var/www/kanfang/php/src;
            fastcgi_pass unix:/run/php/php7.0-fpm.sock;
            fastcgi_index index.php;
            fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
            include fastcgi_params;
        }
    }
    server {
        server_name xiaohongshu.xinwentuan.com;
        listen       80;
        charset UTF-8;

        location / {
            root   /var/www/xiaohongshu/web;
            index index.html;
            location /jianfei/
            {
                alias /var/www/xiaohongshu/jianfei/web/;
            }
            location ~.*\.(jpg|png|jpeg|ico)$
            {
                expires 30d;
            }

            location ~.*\.(js|css)?$
            {
                expires 1h;
            }
        }
        location ~\.php$ {
            root   /var/www/xiaohongshu/php/src;
            fastcgi_pass unix:/run/php/php7.0-fpm.sock;
            fastcgi_index index.php;
            fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
            include fastcgi_params;
            location ~ ^/jianfei/(.+\.php)$ {
                alias   /var/www/xiaohongshu/jianfei/php/src/$1;
                fastcgi_pass unix:/run/php/php7.0-fpm.sock;
                fastcgi_index index.php;
                fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
                include fastcgi_params;
            }
        }
    }
    server {
        server_name devinfo.zhujiaxiaochi.com;
        listen       443;
        charset UTF-8;
        ssl on;
        ssl_certificate   /var/www/getdeviceinfo/cert/2044847_devinfo.zhujiaxiaochi.com.pem;
        ssl_certificate_key  /var/www/getdeviceinfo/cert/2044847_devinfo.zhujiaxiaochi.com.key;
        ssl_session_timeout 5m;
        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
        ssl_prefer_server_ciphers on;
        location ~\.php$ {
            root   /var/www/getdeviceinfo/php/src;
            fastcgi_pass unix:/run/php/php7.0-fpm.sock;
            fastcgi_index index.php;
            fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
            include fastcgi_params;
        }
    }
    server {
        server_name qr.wekn.cn;
        listen       80;
        charset UTF-8;

        location / {
            root   /var/www/qr/web;
            index index.html;

            location ~.*\.(jpg|png|jpeg|ico)$
            {
                expires 30d;
            }

            location ~.*\.(js|css)?$
            {
                expires 1h;
            }
        }
    }
    server {
        server_name zhima.xinwentuan.com;
        listen       80;
        charset UTF-8;

        location / {
            root   /var/www/zhima/web;
            index index.html;

            location ~.*\.(jpg|png|jpeg|ico)$
            {
                expires 30d;
            }

            location ~.*\.(js|css)?$
            {
                expires 1h;
            }
        }
    }
    server {
        server_name sms-api.xinwentuan.com;
        listen       80;
        charset UTF-8;

        location / {
            root   /var/www/sms-api/web;
            index index.html;

            location ~.*\.(jpg|png|jpeg|ico)$
            {
                expires 30d;
            }

            location ~.*\.(js|css)?$
            {
                expires 1h;
            }
        }
        location ~\.(txt|log)$ {
            root   /var/www/sms-api/php/logs;
        }
        location ~\.php$ {
            root   /var/www/sms-api/php/src;
            fastcgi_pass unix:/run/php/php7.0-fpm.sock;
            fastcgi_index index.php;
            fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
            include fastcgi_params;
        }
    }

    server {
        server_name api-test.xinwentuan.com;
        listen       80;
        charset UTF-8;

        location / {
            root   /var/www/api-test/web;
            index index.html;

            location ~.*\.(jpg|png|jpeg|ico)$
            {
                expires 30d;
            }

            location ~.*\.(js|css)?$
            {
                expires 1h;
            }
        }
        location ~\.(txt|log)$ {
            root   /var/www/api-test/php/logs;
        }
        location ~\.php$ {
            root   /var/www/api-test/php/src;
            fastcgi_pass unix:/run/php/php7.0-fpm.sock;
            fastcgi_index index.php;
            fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
            include fastcgi_params;
        }
    }
    server {
        server_name zhaosheng.xinwentuan.com;
        listen       80;
        charset UTF-8;

        location / {
            root   /var/www/zhaosheng/web;
            index index.html;

            location ~.*\.(jpg|png|jpeg|ico)$
            {
                expires 30d;
            }

            location ~.*\.(js|css)?$
            {
                expires 1h;
            }
        }
        location ~\.(txt|log)$ {
            root   /var/www/zhaosheng/php/logs;
        }
        location ~\.php$ {
            root   /var/www/zhaosheng/php/src;
            fastcgi_pass unix:/run/php/php7.0-fpm.sock;
            fastcgi_index index.php;
            fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
            include fastcgi_params;
        }
    }
    server {
        server_name lmzmjy.xinwentuan.com;
        listen       80;
        charset UTF-8;

        location / {
            root   /var/www/lmzmjy/web;
            index index.html;

            location ~.*\.(jpg|png|jpeg|ico)$
            {
                expires 30d;
            }

            location ~.*\.(js|css)?$
            {
                expires 1h;
            }
        }
        location ~\.(txt|log)$ {
            root   /var/www/lmzmjy/php/logs;
        }
        location ~\.php$ {
            root   /var/www/lmzmjy/php/src;
            fastcgi_pass unix:/run/php/php7.0-fpm.sock;
            fastcgi_index index.php;
            fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
            include fastcgi_params;
        }
    }
root@iZm5eh06giclmv9hhooy17Z:~#
```
