Task:

Create a table that displays the data provided by the server’s api.
Data from api provided in JSON format. <br>

## General query structure

```
{
    data : array Person,
    count: number of responses to the request
}
```
<br>

```
Person: {
    id: int,
    name: string,
    funds: string,
    city: string,
    phone: string
}
```
<br>
Api supports the following query paths:<br>
localhost:8080:<br>
GET / : <br>
{
    limit: string,<br>
    offset: string,<br>
    name: string,<br>
    city: string,<br>
    funds: int as string, // (For example, if 100, it will show results where funds> 100, if a negative number is less)<br>
    phone: string<br>
};<br>
<br>
<br>
PUT /update/:id :<br>
{<br>
    name: string,<br>
    city: string,<br>
    funds: string,<br>
    phone: string<br>
}<br>
<br>

Use [Axios](https://www.npmjs.com/package/axios) as a library for HTTP requests.<br>
Use Postman or Insomnia to check how api works.<br>
<br>
**The table should be paginated, it should be possible to simultaneously search all fields. Think of it as filters.<br>
It should be possible to change the Person data, a new saved user is returned in the response.**<br>

[Backend](https://github.com/MityaSaray/IzTest). To start the server enter the command "npm install" and "npm start" in the root directory of the project.

