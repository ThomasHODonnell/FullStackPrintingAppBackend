__non-persistent data-saver__

This server accepts creates an /api post route
It accepts JSON in the body, which is saved in the `people` array on the backend. 

The server is setup to use ES6 modules.

To see these objects, visit [http://localhost:3001/api](http://localhost:3001/api) in your browser. 

**setup**

use at least node 16
run the following in the terminal:
`npm i`
`node app`

open postman 

create a post request to  `http://localhost:3001/api`

add any JSON into the body

```json
{
	"title":"hi2",	
	"author":"mel",
	"release_date": "2020-11-11",
	"subject":"hi"
}
```

select content-type: JSON/application

click 'send'

in order to see JSON objects, open browser to [http://localhost:3001/api](http://localhost:3001/api)

Next steps: 

add a persistent storage method.