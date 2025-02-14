<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@3rdweb/sdk](./sdk.md) &gt; [IpfsStorage](./sdk.ipfsstorage.md) &gt; [buildFilePropertiesMap](./sdk.ipfsstorage.buildfilepropertiesmap.md)

## IpfsStorage.buildFilePropertiesMap() method

This function recurisely traverses an object and hashes any `Buffer` or `File` objects into the returned map.

<b>Signature:</b>

```typescript
buildFilePropertiesMap(object: any, files: (File | Buffer)[]): Promise<(File | Buffer)[]>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  object | any | The object to recurse over |
|  files | (File \| Buffer)\[\] | The running array of files or buffer to upload |

<b>Returns:</b>

Promise&lt;(File \| Buffer)\[\]&gt;

- The final map of all hashes to files

