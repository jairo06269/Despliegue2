name: Deploy to Azure

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout code
      uses: actions/checkout@v3

    - name: Set up SSH
      run: |
        mkdir -p ~/.ssh
        echo "${{ secrets.AZURE_SSH_KEY }}" > ~/.ssh/id_rsa
        chmod 600 ~/.ssh/id_rsa
        ssh-keyscan -H ${{ secrets.AZURE_HOST }} >> ~/.ssh/known_hosts

    - name: Pull and restart Apache on Azure
      run: |
        ssh ${{ secrets.AZURE_HOST }} << 'EOF'
          cd /var/www/html/miapp
          git pull origin main
          sudo systemctl restart apache2
        EOF
