#!/bin/sh
# 安装依赖
apk update && apk add --no-cache wget unzip
# 下载 V2Ray
wget https://github.com/v2fly/v2ray-core/releases/latest/download/v2ray-linux-64.zip -O /tmp/v2ray.zip
# 解压 V2Ray
mkdir -p /usr/local/share/v2ray
unzip /tmp/v2ray.zip -d /usr/local/share/v2ray
# 配置 V2Ray
cat << EOF > /usr/local/share/v2ray/config.json
{
  "inbounds": [
    {
      "port": 23601, // 修改监听端口号
      "protocol": "vmess",
      "settings": {
        "clients": [
          {
            "id": "af869fa1-2cff-4967-826c-106839608227", // 修改 UUID
            "alterId": 64 // 修改 alterId
          }
        ]
      },
      "streamSettings": {
        "network": "tcp" // 修改传输协议
      }
    }
  ],
  "outbounds": [
    {
      "protocol": "freedom",
      "settings": {}
    }
  ]
}
EOF
# 启动 V2Ray
/usr/local/share/v2ray/v2ray -config /usr/local/share/v2ray/config.json
