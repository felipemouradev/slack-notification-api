node -v &&
service mongodb restart &&
node /var/www/html/server.js &&
tail -f /dev/null
