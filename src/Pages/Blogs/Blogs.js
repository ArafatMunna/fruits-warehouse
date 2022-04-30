import React from 'react';

const Blogs = () => {
    return (
        <div className="container mt-3">
            <div>
                <h3>Difference between javascript and nodejs</h3>
                <p>
                    <b>Javascripts</b>
                    <br />
                    <li>
                        Javascript is a programming language that is used for
                        writing scripts on the website.
                    </li>
                    <li>Javascript can only be run in the browsers.</li>
                    <li>It is basically used on the client-side.</li>
                    <li>
                        Javascript is capable enough to add HTML and play with
                        the DOM.
                    </li>
                    <li>
                        Javascript can run in any browser engine as like JS core
                        in safari and Spidermonkey in Firefox.
                    </li>
                </p>
                <p>
                    <b>Nodejs</b>
                    <br />
                    <li>NodeJS is a Javascript runtime environment.</li>
                    <li>
                        We can run Javascript outside the browser with the help
                        of NodeJS.
                    </li>
                    <li>Nodejs does not have capability to add HTML tags.</li>
                    <li>
                        V8 is the Javascript engine inside of node.js that
                        parses and runs Javascript.
                    </li>
                    <li>Nodejs is used in server-side development.</li>
                </p>
            </div>
            <div>
                <h3>
                    When should you use nodejs and When should you is mongodb?
                </h3>
                <p>
                    NodeJS is a JavaScript runtime. NodeJS is used for server
                    site development. NodeJS is used to create server sites for
                    storing and loading data between databases and client sites.
                    MongoDB is a no SQL database. It stores the data sent by the
                    client site and the client site can load the data as
                    required.
                </p>
            </div>

            <div>
                <h3>Difference between sql and nosql database</h3>
                <p>
                    <b>Sql</b>
                    <br />
                    <li>Relational database management system.</li>
                    <li>
                        These databases have fixed or static or predefined
                        schema.
                    </li>
                    <li>
                        These databases are best suited for complex queries.
                    </li>
                    <li>
                        These databases are not suited for hierarchical data
                        storage.
                    </li>
                    <li>Vertically Scalable.</li>
                </p>
                <p>
                    <b>No Sql</b>
                    <br />
                    <li>Non-relational or distributed database system.</li>
                    <li>They have dynamic schema.</li>
                    <li>
                        These databases are not so good for complex queries.
                    </li>
                    <li>
                        These databases are best suited for hierarchical data
                        storage.
                    </li>
                    <li>Horizontally scalable.</li>
                </p>
            </div>
            <div>
                <h3>What is the purpose of jwt and how does it work?</h3>
                <p>
                    JWTs are used as a secure way to authenticate users and
                    share information. When a user logs in, the server gives the
                    user a token through JWT. Tokens are sent to the server site
                    when the user makes an API call. The server site then
                    validates the token. Provides information if the token is
                    valid. And if the token is not valid then no information is
                    provided.
                </p>
            </div>
        </div>
    );
};

export default Blogs;
