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
import { CreateVendorRequest } from '../models';
// @ts-ignore
import { PageVendorResponse } from '../models';
// @ts-ignore
import { PaymentAccountRequest } from '../models';
// @ts-ignore
import { UpdateVendorRequest } from '../models';
// @ts-ignore
import { VendorResponse } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * VendorsApi - axios parameter creator
 * @export
 */
export const VendorsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         *  This endpoint creates a new vendor. 
         * @summary  Create vendor 
         * @param {string} idempotencyKey 
         * @param {CreateVendorRequest} createVendorRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNewVendor: async (idempotencyKey: string, createVendorRequest: CreateVendorRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'idempotencyKey' is not null or undefined
            assertParamExists('createNewVendor', 'idempotencyKey', idempotencyKey)
            // verify required parameter 'createVendorRequest' is not null or undefined
            assertParamExists('createNewVendor', 'createVendorRequest', createVendorRequest)
            const localVarPath = `/v1/vendors`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2", ["vendors"], configuration)
            if (idempotencyKey != null) {
                localVarHeaderParameter['Idempotency-Key'] = String(idempotencyKey);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: createVendorRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/vendors',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(createVendorRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         *  This endpoint deletes a vendor by ID. 
         * @summary  Delete vendor. 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteVendorById: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deleteVendorById', 'id', id)
            const localVarPath = `/v1/vendors/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id !== undefined ? id : `-id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2", ["vendors"], configuration)

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/vendors/{id}',
                httpMethod: 'DELETE'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         *  This endpoint gets a vendor by ID. 
         * @summary  Get vendor 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getById: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getById', 'id', id)
            const localVarPath = `/v1/vendors/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id !== undefined ? id : `-id-`)));
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
            await setOAuthToObject(localVarHeaderParameter, "OAuth2", ["vendors.readonly"], configuration)

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/vendors/{id}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         *  This endpoint lists all existing vendors for an account. Takes an optional parameter to match by vendor name. 
         * @summary  Lists vendors  
         * @param {string} [cursor] 
         * @param {number} [limit] 
         * @param {string} [name] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        list: async (cursor?: string, limit?: number, name?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/vendors`;
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
            await setOAuthToObject(localVarHeaderParameter, "OAuth2", ["vendors.readonly"], configuration)
            if (cursor !== undefined) {
                localVarQueryParameter['cursor'] = cursor;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (name !== undefined) {
                localVarQueryParameter['name'] = name;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/vendors',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         *      Updates an existing vendor by ID. 
         * @summary Update vendor
         * @param {string} id 
         * @param {UpdateVendorRequest} updateVendorRequest 
         * @param {string} [idempotencyKey] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateById: async (id: string, updateVendorRequest: UpdateVendorRequest, idempotencyKey?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateById', 'id', id)
            // verify required parameter 'updateVendorRequest' is not null or undefined
            assertParamExists('updateById', 'updateVendorRequest', updateVendorRequest)
            const localVarPath = `/v1/vendors/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id !== undefined ? id : `-id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2", ["vendors"], configuration)
            if (idempotencyKey != null) {
                localVarHeaderParameter['Idempotency-Key'] = String(idempotencyKey);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: updateVendorRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/vendors/{id}',
                httpMethod: 'PUT'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(updateVendorRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * VendorsApi - functional programming interface
 * @export
 */
export const VendorsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = VendorsApiAxiosParamCreator(configuration)
    return {
        /**
         *  This endpoint creates a new vendor. 
         * @summary  Create vendor 
         * @param {VendorsApiCreateNewVendorRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createNewVendor(requestParameters: VendorsApiCreateNewVendorRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<VendorResponse>> {
            const createVendorRequest: CreateVendorRequest = {
                company_name: requestParameters.company_name,
                email: requestParameters.email,
                phone: requestParameters.phone,
                payment_accounts: requestParameters.payment_accounts
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.createNewVendor(requestParameters.idempotencyKey, createVendorRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         *  This endpoint deletes a vendor by ID. 
         * @summary  Delete vendor. 
         * @param {VendorsApiDeleteVendorByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteVendorById(requestParameters: VendorsApiDeleteVendorByIdRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteVendorById(requestParameters.id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         *  This endpoint gets a vendor by ID. 
         * @summary  Get vendor 
         * @param {VendorsApiGetByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getById(requestParameters: VendorsApiGetByIdRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<VendorResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getById(requestParameters.id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         *  This endpoint lists all existing vendors for an account. Takes an optional parameter to match by vendor name. 
         * @summary  Lists vendors  
         * @param {VendorsApiListRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async list(requestParameters: VendorsApiListRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PageVendorResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.list(requestParameters.cursor, requestParameters.limit, requestParameters.name, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         *      Updates an existing vendor by ID. 
         * @summary Update vendor
         * @param {VendorsApiUpdateByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateById(requestParameters: VendorsApiUpdateByIdRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<VendorResponse>> {
            const updateVendorRequest: UpdateVendorRequest = {
                company_name: requestParameters.company_name,
                email: requestParameters.email,
                phone: requestParameters.phone,
                payment_accounts: requestParameters.payment_accounts,
                beneficiary_name: requestParameters.beneficiary_name
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateById(requestParameters.id, updateVendorRequest, requestParameters.idempotencyKey, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * VendorsApi - factory interface
 * @export
 */
export const VendorsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = VendorsApiFp(configuration)
    return {
        /**
         *  This endpoint creates a new vendor. 
         * @summary  Create vendor 
         * @param {VendorsApiCreateNewVendorRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNewVendor(requestParameters: VendorsApiCreateNewVendorRequest, options?: AxiosRequestConfig): AxiosPromise<VendorResponse> {
            return localVarFp.createNewVendor(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         *  This endpoint deletes a vendor by ID. 
         * @summary  Delete vendor. 
         * @param {VendorsApiDeleteVendorByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteVendorById(requestParameters: VendorsApiDeleteVendorByIdRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.deleteVendorById(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         *  This endpoint gets a vendor by ID. 
         * @summary  Get vendor 
         * @param {VendorsApiGetByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getById(requestParameters: VendorsApiGetByIdRequest, options?: AxiosRequestConfig): AxiosPromise<VendorResponse> {
            return localVarFp.getById(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         *  This endpoint lists all existing vendors for an account. Takes an optional parameter to match by vendor name. 
         * @summary  Lists vendors  
         * @param {VendorsApiListRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        list(requestParameters: VendorsApiListRequest = {}, options?: AxiosRequestConfig): AxiosPromise<PageVendorResponse> {
            return localVarFp.list(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         *      Updates an existing vendor by ID. 
         * @summary Update vendor
         * @param {VendorsApiUpdateByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateById(requestParameters: VendorsApiUpdateByIdRequest, options?: AxiosRequestConfig): AxiosPromise<VendorResponse> {
            return localVarFp.updateById(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createNewVendor operation in VendorsApi.
 * @export
 * @interface VendorsApiCreateNewVendorRequest
 */
export type VendorsApiCreateNewVendorRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof VendorsApiCreateNewVendor
    */
    readonly idempotencyKey: string
    
} & CreateVendorRequest

/**
 * Request parameters for deleteVendorById operation in VendorsApi.
 * @export
 * @interface VendorsApiDeleteVendorByIdRequest
 */
export type VendorsApiDeleteVendorByIdRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof VendorsApiDeleteVendorById
    */
    readonly id: string
    
}

/**
 * Request parameters for getById operation in VendorsApi.
 * @export
 * @interface VendorsApiGetByIdRequest
 */
export type VendorsApiGetByIdRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof VendorsApiGetById
    */
    readonly id: string
    
}

/**
 * Request parameters for list operation in VendorsApi.
 * @export
 * @interface VendorsApiListRequest
 */
export type VendorsApiListRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof VendorsApiList
    */
    readonly cursor?: string
    
    /**
    * 
    * @type {number}
    * @memberof VendorsApiList
    */
    readonly limit?: number
    
    /**
    * 
    * @type {string}
    * @memberof VendorsApiList
    */
    readonly name?: string
    
}

/**
 * Request parameters for updateById operation in VendorsApi.
 * @export
 * @interface VendorsApiUpdateByIdRequest
 */
export type VendorsApiUpdateByIdRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof VendorsApiUpdateById
    */
    readonly id: string
    
    /**
    * 
    * @type {string}
    * @memberof VendorsApiUpdateById
    */
    readonly idempotencyKey?: string
    
} & UpdateVendorRequest

/**
 * VendorsApiGenerated - object-oriented interface
 * @export
 * @class VendorsApiGenerated
 * @extends {BaseAPI}
 */
export class VendorsApiGenerated extends BaseAPI {
    /**
     *  This endpoint creates a new vendor. 
     * @summary  Create vendor 
     * @param {VendorsApiCreateNewVendorRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VendorsApiGenerated
     */
    public createNewVendor(requestParameters: VendorsApiCreateNewVendorRequest, options?: AxiosRequestConfig) {
        return VendorsApiFp(this.configuration).createNewVendor(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     *  This endpoint deletes a vendor by ID. 
     * @summary  Delete vendor. 
     * @param {VendorsApiDeleteVendorByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VendorsApiGenerated
     */
    public deleteVendorById(requestParameters: VendorsApiDeleteVendorByIdRequest, options?: AxiosRequestConfig) {
        return VendorsApiFp(this.configuration).deleteVendorById(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     *  This endpoint gets a vendor by ID. 
     * @summary  Get vendor 
     * @param {VendorsApiGetByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VendorsApiGenerated
     */
    public getById(requestParameters: VendorsApiGetByIdRequest, options?: AxiosRequestConfig) {
        return VendorsApiFp(this.configuration).getById(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     *  This endpoint lists all existing vendors for an account. Takes an optional parameter to match by vendor name. 
     * @summary  Lists vendors  
     * @param {VendorsApiListRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VendorsApiGenerated
     */
    public list(requestParameters: VendorsApiListRequest = {}, options?: AxiosRequestConfig) {
        return VendorsApiFp(this.configuration).list(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     *      Updates an existing vendor by ID. 
     * @summary Update vendor
     * @param {VendorsApiUpdateByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VendorsApiGenerated
     */
    public updateById(requestParameters: VendorsApiUpdateByIdRequest, options?: AxiosRequestConfig) {
        return VendorsApiFp(this.configuration).updateById(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
