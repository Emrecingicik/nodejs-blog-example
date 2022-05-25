# nodejs-blog-example

# blog

| Route | HTTP Verb | POST body | Description |
| --- | --- | --- | --- |
| /api/blogs | `GET` | empty | list all blogs | 
| /api/blog/:blog_id | `GET` | empty | list a blog | 
| /api/blog | `POST` | {'title':'foo','body':'bar'} | create a blog |
| /api/blog/:blog_id | `DELETE` | empty | delete a blog | 