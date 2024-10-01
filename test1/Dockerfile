# 1. ベースイメージを指定
FROM python:3.9-slim

# 2. 作業ディレクトリを設定
WORKDIR /app

# 3. 依存関係をコピーしてインストール
COPY requirements.txt .

# 依存関係をインストール
RUN pip install --no-cache-dir -r requirements.txt

# 4. アプリケーションのソースコードをコンテナにコピー
COPY . .

# 5. アプリケーションを実行
CMD ["python", "app.py"]
