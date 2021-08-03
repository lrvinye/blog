---
title: 命令速查
date: 2020-05-29 23:13:35
updated: 2021-04-15 17:22:00
category: 运维
tags: [运维, 安装, 配置]
---

# Docker 命令

进入容器

```bash
docker exec -i -t  mynginx /bin/bash
```

## 部署推送

- 登录仓库

```bash
docker login -u 用户名 -p 密码  [SERVER]
ex:
sudo docker login --username=100012787985 ccr.ccs.tencentyun.com
```

- 镜像打标记

```bash
sudo docker tag [ImageId] ccr.ccs.tencentyun.com/cherryez/nginx:[tag]
```

- 上传镜像至仓库

```bash
docker push myapache:v1
```

- 通过 Dockerfile 构建镜像并推送

```bash
docker build -t 镜像标签 -f 指定要使用的Dockerfile路径
ex:
docker build -t huwanyang168/demo:0.0.1 -f Dockerfile .
docker push huwanyang168/demo:0.0.1
```

## nexus/服务器 Maven

```bash
docker run -d -p 8081:8081 -p 5000:5000 --name nexus -v /home/nexus/nexus-data:/nexus-data --restart=always sonatype/nexus3
```

5000 端口是用于镜像仓库的服务端口 8081 端口是 nexus 的服务端口

/nexus-data 数据挂载

## nginx

```bash
docker run --rm --name nginx -p 80:80 -p 443:443 -v /home/nginx/html:/usr/share/nginx/html -v /home/nginx/ssl:/etc/nginx/ssl -v /home/nginx/conf/dnginx-gz-app.conf:/etc/nginx/nginx.conf -v /home/nginx/logs:/var/log/nginx -d nginx:alpine
```

## nacos

**单机**

```bash
docker run -d -e MODE=standalone -e SPRING_DATASOURCE_PLATFORM=mysql -e MYSQL_SERVICE_HOST=172.16.0.13 -e MYSQL_SERVICE_PORT=3306 -e MYSQL_SERVICE_USER=nacos -e MYSQL_SERVICE_PASSWORD=nacos2020# -e MYSQL_SERVICE_DB_NAME=nacos -p 9843:8848 --restart=on-failure --name nacos9843 nacos/nacos-server
```

**集群** --暂时测试结果不可用

```bash
docker run --name nacos9843 --restart=on-failure -d -e MYSQL_MASTER_SERVICE_HOST=172.16.0.13 -e MYSQL_MASTER_SERVICE_PORT=3306 -e MYSQL_MASTER_SERVICE_DB_NAME=nacos -e MYSQL_MASTER_SERVICE_USER=nacos -e MYSQL_MASTER_SERVICE_PASSWORD=nacos2020# -e SPRING_DATASOURCE_PLATFORM=mysql -e MYSQL_DATABASE_NUM=1 -e NACOS_SERVERS=172.16.0.14:9841,172.16.0.14:9842,172.16.0.14:9843 -e JVM_XMS=512m -e JVM_XMX=512m -e JVM_XMN=256m -e JVM_MS=32m -e JVM_MMS=80m -p 9843:8848 nacos/nacos-server
```

```bash
nacos-0.nacos.cherryez.svc.cluster.local.:8848
nacos-1.nacos.cherryez.svc.cluster.local.:8848
nacos-2.nacos.cherryez.svc.cluster.local.:8848"
```

## Redis

启动并设置密码

```bash
docker run -d --name redis -p 6379:6379 redis --requirepass "mypassword"
```

# K8S

集群中访问任意命名空间下的 service：

```
${服务名}.${命名空间}.svc.cluster.local
```

### 强制销毁 pod

登录任意 TKE 工作节点，尝试使用以下命令删除异常 pod：

```bash
kubectl get pod -n 命名空间 |grep pod名  ##查看是否存在 Terminating 状态的pod

kubectl delete pod pod名 -n 命名空间 --force --grace-period=0  ##使用命令强制删除Terminating 状态的pod
```

Statefulset headless 的 dns 域名

```bash
“cluster.local”指的是集群的域名 按原样即可
$(podname).(headless server name)
FQDN： $(podname).(headless server name).namespace.svc.cluster.local
```

# wget 命令

## url 下载文件

```bash
wget
--user=用户名 --ask-password -P 指定目录 url
```
