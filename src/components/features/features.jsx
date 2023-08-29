import React from "react";

export default function features({ title, price, action, children }) {
  return (
    <div class="card text-center">
      <div class="card-body lh-lg">
        <h5 class="card-title">{title}</h5>
        <div class="card-text d-flex justify-content-between my-2">
          <span className="text-muted">
            {children}
            {action}
          </span>
          <h3 className="fs-5">{price} $</h3>
        </div>
        <span class="card-subtitle mb-2 text-body-secondary">
          در مقایسه با ماه گذشته
        </span>
      </div>
    </div>
  );
}
