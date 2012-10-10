/**
* Appcelerator Titanium Mobile
* This is generated code. Do not modify. Your changes *will* be lost.
* Generated code is Copyright (c) 2009-2011 by Appcelerator, Inc.
* All Rights Reserved.
*/
#import <Foundation/Foundation.h>
#import "TiUtils.h"
#import "ApplicationDefaults.h"
 
@implementation ApplicationDefaults
  
+ (NSMutableDictionary*) copyDefaults
{
    NSMutableDictionary * _property = [[NSMutableDictionary alloc] init];

    [_property setObject:[TiUtils stringValue:@"D1YWKE3eEBXWoq1zmF3uyxTh2dA2U9X1"] forKey:@"acs-oauth-secret-production"];
    [_property setObject:[TiUtils stringValue:@"hsAckYMyw4hgBHk9xCTfY1wc9t3FrN1a"] forKey:@"acs-oauth-key-production"];
    [_property setObject:[TiUtils stringValue:@"sWLDFVkqrGpX3pU3krdcs4LJ96rI5CPK"] forKey:@"acs-api-key-production"];
    [_property setObject:[TiUtils stringValue:@"jJWbL2RbXrtdm8NM4lSn4fZfLgV7op2l"] forKey:@"acs-oauth-secret-development"];
    [_property setObject:[TiUtils stringValue:@"U8EphpPF9vfRCf6W0sJC45UeaXFrEbhC"] forKey:@"acs-oauth-key-development"];
    [_property setObject:[TiUtils stringValue:@"nJZKMC17imswePDBnaFjgJfSzP1JrhG0"] forKey:@"acs-api-key-development"];
    [_property setObject:[TiUtils stringValue:@"system"] forKey:@"ti.ui.defaultunit"];

    return _property;
}
@end
