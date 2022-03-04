# How to Validate Captures with `validate.js`

## Requirements

Node CLI. Make sure Node is in your path.

You can download this whole repository, or you can download `validate.js` by itself.

## Usage

```
$ cd <path/to/folder/that/contains/validate.js>

$ node validate.js <path/to/capture/file>
```

example: `node validate.js "~/999/1234567890/data"`
 
example: `node validate.js "~/999/1234567890/data.json"`

Successful output looks like this:

```
$ node validate.js "<path\to\capture\file\here>"
first message: Mon Feb 14 2022 15:46:46 GMT-0600 (Central Standard Time).
last message: Mon Feb 14 2022 16:34:25 GMT-0600 (Central Standard Time).
Message Summaries:
{
  total: <total>,
  draw: {
    '10': { name: 'continue', total: 502 },
    '11': { name: 'end', total: 23 },
    '12': { name: 'delete', total: 0 },
    '13': { name: 'show', total: 3 },
    '14': { name: 'hide', total: 14 },
    total: <total>
  },
  interaction: {
    '0': { name: 'look start', total: 3175 },
    '1': { name: 'look end', total: 3175 },
    '2': { name: 'show', total: 7 },
    '3': { name: 'hide', total: 7 },
    '4': { name: 'grab', total: 11 },
    '5': { name: 'drop', total: 5 },
    '8': { name: 'lock', total: 5 },
    '9': { name: 'unlock', total: 5 },
    '12': { name: 'show menu', total: 24 },
    '13': { name: 'hide menu', total: 44 },
    '14': { name: 'settings tab', total: 22 },
    '15': { name: 'people tab', total: 4 },
    '16': { name: 'interaction tab', total: 4 },
    '17': { name: 'create tab', total: 5 },
    total: <total>
  },
  pose: { total: <total> }
}
```

## Usage (Screenshots)

![validate-1](https://user-images.githubusercontent.com/8165314/156675729-e5d2d9f9-82f3-45a6-841c-795bc95c5ee4.png)
![validate-2](https://user-images.githubusercontent.com/8165314/156675733-5e2352cc-4d5c-4eed-8038-2f5a5bc9608d.png)
![validate-3](https://user-images.githubusercontent.com/8165314/156675740-6b4b1862-2415-4e6f-b37f-f0a391bfb6be.png)
![validate-4](https://user-images.githubusercontent.com/8165314/156675742-636adb4d-db5c-4b0a-971c-02f8f0d88725.png)
![validate-5](https://user-images.githubusercontent.com/8165314/156675746-3c09cc58-b484-42cf-9682-709179759290.png)
