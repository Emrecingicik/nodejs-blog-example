# nodejs-blog-example

# blogs

| Route | HTTP Verb | POST body | Description |
| --- | --- | --- | --- |
| /api/blogs | `GET` | empty | list all blogs | 
| /api/blogs/:blog_id | `GET` | empty | list a blog | 
| /api/blogs | `POST` | {'title':'foo','body':'bar'} | create a blog |
| /api/blogs/:blog_id | `DELETE` | empty | delete a blog | 