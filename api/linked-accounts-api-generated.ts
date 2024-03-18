/* tslint:disable */
/* eslint-disable */
/*
Payments API


The payments API allows you to initiate and manage payments and vendors from your Brex business accounts.


The version of the OpenAPI document: 1.0
Contact: developer-access@brex.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
import { setOAuthToObject } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { PageBankConnection } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * LinkedAccountsApi - axios parameter creator
 * @export
 */
export const LinkedAccountsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         *  This endpoint lists all bank connections that are eligible to make ACH transfers to Brex business account 
         * @summary  Lists linked accounts 
         * @param {string} [cursor] 
         * @param {number} [limit] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        list: async (cursor?: string, limit?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/linked_accounts`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2", ["linked_accounts.readonly"], configuration)
            if (cursor !== undefined) {
                localVarQueryParameter['cursor'] = cursor;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/linked_accounts',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * LinkedAccountsApi - functional programming interface
 * @export
 */
export const LinkedAccountsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = LinkedAccountsApiAxiosParamCreator(configuration)
    return {
        /**
         *  This endpoint lists all bank connections that are eligible to make ACH transfers to Brex business account 
         * @summary  Lists linked accounts 
         * @param {LinkedAccountsApiListRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async list(requestParameters: LinkedAccountsApiListRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PageBankConnection>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.list(requestParameters.cursor, requestParameters.limit, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * LinkedAccountsApi - factory interface
 * @export
 */
export const LinkedAccountsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = LinkedAccountsApiFp(configuration)
    return {
        /**
         *  This endpoint lists all bank connections that are eligible to make ACH transfers to Brex business account 
         * @summary  Lists linked accounts 
         * @param {LinkedAccountsApiListRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        list(requestParameters: LinkedAccountsApiListRequest = {}, options?: AxiosRequestConfig): AxiosPromise<PageBankConnection> {
            return localVarFp.list(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for list operation in LinkedAccountsApi.
 * @export
 * @interface LinkedAccountsApiListRequest
 */
export type LinkedAccountsApiListRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof LinkedAccountsApiList
    */
    readonly cursor?: string
    
    /**
    * 
    * @type {number}
    * @memberof LinkedAccountsApiList
    */
    readonly limit?: number
    
}

/**
 * LinkedAccountsApiGenerated - object-oriented interface
 * @export
 * @class LinkedAccountsApiGenerated
 * @extends {BaseAPI}
 */
export class LinkedAccountsApiGenerated extends BaseAPI {
    /**
     *  This endpoint lists all bank connections that are eligible to make ACH transfers to Brex business account 
     * @summary  Lists linked accounts 
     * @param {LinkedAccountsApiListRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LinkedAccountsApiGenerated
     */
    public list(requestParameters: LinkedAccountsApiListRequest = {}, options?: AxiosRequestConfig) {
        return LinkedAccountsApiFp(this.configuration).list(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}