// University of Illinois/NCSA
// Open Source License
// http://otm.illinois.edu/disclose-protect/illinois-open-source-license

// Copyright (c) 2020 Grainger Engineering Library Information Center.  All rights reserved.

// Developed by: IDEA Lab
//               Grainger Engineering Library Information Center - University of Illinois Urbana-Champaign
//               https://library.illinois.edu/enx

// Permission is hereby granted, free of charge, to any person obtaining a copy of
// this software and associated documentation files (the "Software"), to deal with
// the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
// of the Software, and to permit persons to whom the Software is furnished to
// do so, subject to the following conditions:
// * Redistributions of source code must retain the above copyright notice,
//   this list of conditions and the following disclaimers.
// * Redistributions in binary form must reproduce the above copyright notice,
//   this list of conditions and the following disclaimers in the documentation
//   and/or other materials provided with the distribution.
// * Neither the names of IDEA Lab, Grainger Engineering Library Information Center,
//   nor the names of its contributors may be used to endorse or promote products
//   derived from this Software without specific prior written permission.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
// CONTRIBUTORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS WITH THE
// SOFTWARE.

/* How to use this file:
 * 
 *      $ cd <path>/komodo-relay/admin-capture/
 * 
 *      $ node validate.js <path/to/capture/file>
 * 
 *          example: node validate.js ~/999/1234567890/data
 * 
 *          example: node validate.js ~/999/1234567890/data.json
 */

const fs = require('fs');

if (process.argv.length != 3) {
    console.log(`Expected input: node validate.js path/to/capture/file`);

    return;
}

fs.readFile(process.argv[2], 'utf8', (err, jsonString) => {
    if (err) {
        console.log(`Error reading file from disk: ${err}`);

        return;
    }

    // parse JSON string to JSON object
    const data = JSON.parse(jsonString);

    console.log(`first message: ${new Date(data[0].ts)}.`);

    console.log(`last message: ${new Date(data[data.length - 1].ts)}.`);

    let messageSummaries = {
        total: 0,
        draw: {
            total: 0,
            10: {
                name: "continue",
                total: 0,
            },
            11: {
                name: "end",
                total: 0,
            },
            12: {
                name: "delete",
                total: 0,
            },
            13: {
                name: "show",
                total: 0,
            },
            14: {
                name: "hide",
                total: 0,
            },
        }, 
        interaction: {
            total: 0,
            0: {
                name: "look start",
                total: 0,
            },
            1: {
                name: "look end",
                total: 0,
            },
            2: {
                name: "show",
                total: 0,
            },
            3: {
                name: "hide",
                total: 0,
            },
            4: {
                name: "grab",
                total: 0,
            },
            5: {
                name: "drop",
                total: 0,
            },
            8: {
                name: "lock",
                total: 0,
            },
            9: {
                name: "unlock",
                total: 0,
            },
            12: {
                name: "show menu",
                total: 0,
            },
            13: {
                name: "hide menu",
                total: 0,
            },
            14: {
                name: "settings tab",
                total: 0,
            },
            15: {
                name: "people tab",
                total: 0,
            },
            16: {
                name: "interaction tab",
                total: 0,
            },
            17: {
                name: "create tab",
                total: 0,
            },
        },
        pose: {
            total: 0,
        }
    }

    data.forEach((message) => {
        messageSummaries.total += 1;

        if (message.type == "draw") {
            messageSummaries.draw.total += 1;

            messageSummaries.draw[message.message.strokeType].total += 1;
        }

        if (message.type == "interaction") {
            messageSummaries.interaction.total += 1;

            messageSummaries.interaction[message.message.interactionType].total += 1;
        }

        if (message.type == "sync") {
            messageSummaries.pose.total += 1;
        }
    });

    console.log(`Message Summaries:`);
    console.dir(messageSummaries);
});
