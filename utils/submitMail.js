import React from "react";

export default async function submitMail(data) {
  const send = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json", Accept: "application/json" },
  });
  console.log(send.json());

  return send.ok;
}
