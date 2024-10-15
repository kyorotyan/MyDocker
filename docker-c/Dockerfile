# ベースイメージとしてUbuntuを使用
FROM ubuntu:latest

# 必要なパッケージのインストール
RUN apt-get update && apt-get install -y \
    g++ \
    cmake \
    make \
    build-essential \
    git \
    && apt-get clean

# ワークディレクトリの作成
WORKDIR /usr/src/app

# コンテナ内で実行するコマンド（必要に応じて変更）
CMD ["/bin/bash"]
