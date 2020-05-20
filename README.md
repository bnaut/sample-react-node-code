# Sample React Code Challenge

By [Andrew Bennett](mailto:andrewbennett910@gmail.com)

This is a simple toy app to demo React and Node javascript code to potential employers.

Enter a number into the input field to output the median prime numbers between 0 and your input. Try entering some bad data too.

## Instructions

1. Clone the repo locally
2. `cd` into `client` and `server` directories
3. Install dependencies in each directory with `yarn install`
4. Run tests with `yarn test` inside each directory
5. Start both `client` and `server` servers using `yarn start` 
- **Note**: Backend startup times are expected to be 10s - 30s due to a large upfront primes computation. See [Implementation Details](#Implementation-Details) section for discussion of the trade-offs of this approach.
6. Navigate to app in [browser](http://localhost:3000) on http://localhost:3000. The [server](http://localhost:5000) runs on http://localhost:5000
7. Enjoy!

## Discussion

#### Technologies 
On the frontend I used React, Styled-components, Eslint, Jest, and React-Testing-Library. 
On the backend I used Express and Jest.

#### Implementation Details

##### Frontend
I used [create-react-app](https://goo.gl/26jfy4) to generate the scaffolding for this app.

I used modern react practices including functional components, react hooks, and styled components (css-in-js).

One design decision to note is the reducer `dataReducer` in `app.js`. By using a reducer to control the state of 
my application, the application does not risk entering an invalid combination of states (i.e., both `thinking` and
displaying an error message simultaenously would be considered an invalid combination).

##### Backend

In this implementation prime numbers between 0 and 1 billion are calculated upon startup and are stored in memory before the server opens a port for connections.

By performing this calculation up front, we are able to provide response times in O(log(n)) time (due to later use of a binary search algorithm, which could be swapped for a lookup table to provide constant time O(1) lookups) rather than O(n(log(log(n))) time from the Sieve of Eratosthenes algorithm used to perform the original calculation. 

The Sieve of Eratosthenes algorithm was implemented using a bit set and computed from 0 - 1 billion (default).

The trade-offs of this approach are a longer startup time and holding the array of ~50m primes in memory, in exchange for much quicker response times (R = 20s --> R < 0.02ms for N = 1b, on my machine).


#### Shortcomings of this implementation

**Use of binary search** In order to retrieve the appropriate subset of primes for each user request (say, 0 - 1000 if n = 1000), I used a binary search implementation to find the index of the largest prime less than n. This is not a large performance issue up to 1 billion, but there are certainly more efficient ways to store this data. As an example, using a lookup table to find the number of primes less than n would likely be more appropriate than performing this calculation for each request, assuming memory is not a concern.

