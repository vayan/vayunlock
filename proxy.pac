function FindProxyForURL(url, host) {
    if (shExpMatch(host, "*.netflix.com"))
    {
        return "PROXY http://162.243.2.104:1111";
    }
    return "DIRECT";
}