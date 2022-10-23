export interface CookiesValue {
    name?: string;
    value?: string;
    duration?: number;
    type?: string;
    maxAge?: string;
    valueToken?: string;
    expiredTime?: string;
    permissionList?: string;
  }
  
  export enum CookiesDateType {
    DAY = 'Day',
    HOUR = 'Hour',
    SECOND = 'Second',
    MINUTE = 'Minute',
  }
  