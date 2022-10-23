import { CookiesDateType, CookiesValue } from '../models/cookie';
// import { Token } from '@app/models/token';
import { CookiesName } from './constant';

export const getCookie = (cname: string): string => {
    let name = cname + '=';
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return '';
};

export const clearCookie = () => {
    let domain = window.location.hostname;
    if (domain.includes('vjaa')) {
        domain = 'vjaa.edu.vn';
        document.cookie =
            `${CookiesName.NAME}=; path=/; domain=${domain}; expires=` +
            new Date(0).toUTCString();
        return;
    }
    if (domain.includes('hisoft')) {
        domain = 'hisoft.vn';
        document.cookie =
            `${CookiesName.NAME}=; path=/; domain=${domain}; expires=` +
            new Date(0).toUTCString();
        return;
    } else
        document.cookie = `${CookiesName.NAME}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;domain=${domain}`;
};

export const setCookie = (props: CookiesValue) => {
    const {
        name,
        type,
        duration,
        value,
        valueToken,
        expiredTime,
        permissionList,
    } = props;
    const d = new Date();
    const defaultDuration = 1 * 24 * 60 * 60; // default: 3 days
    let expires = 'expires=';

    switch (type && duration) {
        // Will expire after (duration) day(s)
        case CookiesDateType.DAY:
            d.setTime(d.getTime() + duration! * 24 * 60 * 60 * 1000);
            break;
        // Will expire after (duration) hour(s)
        case CookiesDateType.HOUR:
            d.setTime(d.getTime() + duration! * 60 * 60 * 1000);
            break;
        // Will expire after (duration) minute(s)
        case CookiesDateType.MINUTE:
            d.setTime(d.getTime() + duration! * 60 * 1000);
            break;
        // Will expire after (duration) second(s)
        case CookiesDateType.SECOND:
            d.setTime(d.getTime() + duration! * 1000);
            break;
        default:
            d.setTime(d.getTime() + defaultDuration * 1000);
            break;
    }
    expires += d.toUTCString();
    let domain = window.location.hostname;
    document.cookie = `${name}=${value};${expires};path=/;domain=${domain};`;
};
