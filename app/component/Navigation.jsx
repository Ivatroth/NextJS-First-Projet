import React from 'react'
import Link from 'next/link'

export default function Navigation() {
  return (
<nav class="navbar navbar-expand-lg bg-dark navbar-dark">
  <div class="container">
    <Link class="navbar-brand" href="/">Home</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto" >
        <li class="nav-item">
          <Link class="nav-link" href="/about">About</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" href="/service">Services</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}
