class AccessPoint:

    def __init__(self, ssid: str, password: str) -> None:
        self.__ssid = ssid
        self.__password = password





class AccessPointError(Exception):
    pass