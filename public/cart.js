const cartItems = document.getElementById('cartItems');
const cartSummary = document.getElementById('cartSummary');

  'IN THE AIR': {
    price: '$19.99',
    file: "[destroy lonely, lucki, glok40spaz] 'IN THE AIR'-Cm 150bpm- @panas_loops.mp3",
    files: {
      mp3: "[destroy lonely, lucki, glok40spaz] 'IN THE AIR'-Cm 150bpm- @panas_loops.mp3",
      wav: "[destroy lonely, lucki, glok40spaz] 'IN THE AIR'-Cm 150bpm- @panas_loops WAV.wav",
      zip: "IN THE AIR.zip",
    },
    page: 'in-the-air.html',
  },
  'TOP FLOOR': {
    price: '$19.99',
    file: "[destroy lonely, lucki] 'TOP FLOOR'-Cm 140bpm- @panas_loops.mp3",
    files: {
      mp3: "[destroy lonely, lucki] 'TOP FLOOR'-Cm 140bpm- @panas_loops.mp3",
      wav: "[destroy lonely, lucki] 'TOP FLOOR'-Cm 140bpm- @panas_loops.wav",
      zip: "TOP FLOOR.zip",
    },
    page: 'browse-beats.html',
  },
  FOREIGN: {
    price: '$19.99',
    file: "[future, destroy lonely, lil baby] 'FOREIGN'- A#m 140bpm- @panas_loops.mp3",
    files: {
      mp3: "[future, destroy lonely, lil baby] 'FOREIGN'- A#m 140bpm- @panas_loops.mp3",
      wav: "[future, destroy lonely, lil baby] 'FOREIGN'- A#m 140bpm- @panas_loops.wav",
      zip: "FOREIGN.zip",
    },
    page: 'browse-beats.html',
  },
  ATLANTA: {
    price: '$25.00',
    file: "[future, lil baby, destroy lonely]'ATLANTA'-Cm 140bpm- @panas_loops.mp3",
    files: {
      mp3: "[future, lil baby, destroy lonely]'ATLANTA'-Cm 140bpm- @panas_loops.mp3",
      wav: "[future, lil baby, destroy lonely]'ATLANTA'-Cm 140bpm- @panas_loops WAV.wav",
      zip: "ATLANTA.zip",
    },
    page: 'atlanta.html',
  },
  OUNCE: {
    price: '$19.99',
    file: "[ian, summrs] 'OUNCE'-Cm 140bpm - @panas_loops.mp3",
    files: {
      mp3: "[ian, summrs] 'OUNCE'-Cm 140bpm - @panas_loops.mp3",
      wav: "[ian, summrs] 'OUNCE'-Cm 140bpm - @panas_loops WAV.wav",
      zip: "OUNCE.zip",
    },
    page: 'browse-beats.html',
  },
  'CRASH DA WHIP': {
    price: '$19.99',
    file: "[ken carson, rich amiri, homixide gang] 'CRASH DA WHIP'- Am 130bpm - @panas_loops.mp3",
    files: {
      mp3: "[ken carson, rich amiri, homixide gang] 'CRASH DA WHIP'- Am 130bpm - @panas_loops.mp3",
      wav: "[ken carson, rich amiri, homixide gang] 'CRASH DA WHIP'- Am 130bpm - @panas_loops WAV.wav",
      zip: "CRASH DAW WHIP.zip",
    },
    page: 'browse-beats.html',
  },
  LEAN: {
    price: '$19.99',
    file: "[lucki, glokk40spaz] 'LEAN' Gm 140bpm - @panas_loops.mp3",
    files: {
      mp3: "[lucki, glokk40spaz] 'LEAN' Gm 140bpm - @panas_loops.mp3",
      wav: "[lucki, glokk40spaz] 'LEAN' Gm 140bpm - @panas_loops WAV.wav",
      zip: "LEAN.zip",
    },
    page: 'browse-beats.html',
  },
  ROAD: {
    price: '$19.99',
    file: "[lucki, veeze] 'ROAD' Cm 141 bpm - @panas_loops.mp3",
    files: {
      mp3: "[lucki, veeze] 'ROAD' Cm 141 bpm - @panas_loops.mp3",
      wav: "[lucki, veeze] 'ROAD' Cm 141 bpm - @panas_loops WAV.wav",
      zip: "ROAD.zip",
    },
    page: 'browse-beats.html',
  },
  NOISY: {
    price: '$19.99',
    file: "[young thug, future, destroy lonely] 'NOISY' Cm 140bpm - @panas_loops.mp3",
    files: {
      mp3: "[young thug, future, destroy lonely] 'NOISY' Cm 140bpm - @panas_loops.mp3",
    },
    page: 'browse-beats.html',
  },
  SLATT: {
    price: '$19.99',
    file: "[young thug, future] 'SLATT'-Cm 140bpm - @panas_loops.mp3",
    files: {
      mp3: "[young thug, future] 'SLATT'-Cm 140bpm - @panas_loops.mp3",
      wav: "[young thug, future] 'SLATT'-Cm 140bpm - @panas_loops WAV.wav",
      zip: "SLATT.zip",
    },
    page: 'browse-beats.html',
  },
  'BIZZY BAP': {
    price: '$19.99',
    file: "'BIZZY BAP'-Am 130bpm-@panas_loops.mp3",
    files: {
      mp3: "'BIZZY BAP'-Am 130bpm-@panas_loops.mp3",
      wav: "'BIZZY BAP'-Am 130bpm-@panas_loops WAV.wav",
      zip: "BIZZY BAP.zip",
    },
    page: 'bizzy-bap.html',
  },
  SLICED: {
    price: '$19.99',
    file: "[destroy lonely, ken carson, southside] 'SLICED'-Cm 140bpm -@panas_loops.mp3",
    files: {
      mp3: "[destroy lonely, ken carson, southside] 'SLICED'-Cm 140bpm -@panas_loops.mp3",
      wav: "[destroy lonely, ken carson, southside] 'SLICED'-Cm 140bpm -@panas_loops.wav",
      zip: "SLICED.zip",
    },
    page: 'browse-beats.html',
  },
  'TRIPPED OUT': {
    price: '$19.99',
    file: "[destroy lonely, hxg, lucki] 'TRIPPED OUT'- Cm 140bpm - @panas_loops.mp3",
    files: {
      mp3: "[destroy lonely, hxg, lucki] 'TRIPPED OUT'- Cm 140bpm - @panas_loops.mp3",
      wav: "[destroy lonely, hxg, lucki] 'TRIPPED OUT'- Cm 140bpm - @panas_loops.wav",
      zip: "tripped.zip",
    },
    page: 'browse-beats.html',
  },
};

const licenseDeliverables = {
  'MP3 Lease': ['mp3'],
  'WAV Lease': ['mp3', 'wav'],
  'Trackout Lease': ['mp3', 'wav', 'zip'],
  'Exclusive Rights': ['mp3', 'wav', 'zip'],
};

function priceNumber(price) {
  const value = Number(String(price).replace(/[^0-9.]/g, ''));
  return Number.isFinite(value) ? value : 0;
}

function cartTotal(items) {
  return items.reduce((total, item) => total + priceNumber(normalizeCartItem(item).price), 0);
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => {
    const entities = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    };
    return entities[character];
  });
}

function titleFromValue(value) {
  const text = String(value || '');
  const quotedTitle = text.match(/'([^']+)'/);
  return (quotedTitle ? quotedTitle[1] : text).replace(/\.mp3$/i, '').trim();
}

function beatSlug(title) {
  return String(title).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function premiumBeatPageUrl(title) {
  return `premium-beat.html?beat=${encodeURIComponent(beatSlug(title))}`;
}

function filesForLicense(catalogItem, licenseName) {
  const deliverables = licenseDeliverables[licenseName] || ['mp3'];
  const files = deliverables.map((fileType) => catalogItem.files && catalogItem.files[fileType]).filter(Boolean);
  return files.length ? files : [catalogItem.file].filter(Boolean);
}

function normalizeCartItem(item) {
  const title = item.beatTitle || titleFromValue(item.title);
  const catalogItem = beatCatalog[title] || {};
  const licenseName = item.licenseName || '';
  const files = item.files && item.files.length ? item.files : filesForLicense(catalogItem, licenseName);

  return {
    title: title || 'Untitled beat',
    displayTitle: licenseName ? `${title || 'Untitled beat'} - ${licenseName}` : title || 'Untitled beat',
    licenseName,
    price: item.price && item.price !== 'PREVIEW' ? item.price : catalogItem.price || '$19.99',
    page: item.page || catalogItem.page || 'browse-beats.html',
    file: files[0] || item.file || catalogItem.file || '',
    files,
  };
}

function cartPaymentKey(items) {
  return `panasPaidCart:${JSON.stringify(items.map(normalizeCartItem))}`;
}

function paidOrderId() {
  return localStorage.getItem(cartPaymentKey(cart));
}

function markCartPaid(orderId) {
  localStorage.setItem(cartPaymentKey(cart), orderId || 'paid');
}

function saveCartItems(items) {
  cart = items;
  saveCart();
  updateCartUI();
}

function removeCartItem(index) {
  const nextCart = cart.filter((_, itemIndex) => itemIndex !== index);
  saveCartItems(nextCart);
  renderCart();
}

function clearCart() {
  saveCartItems([]);
  renderCart();
}

function renderEmptyCart() {
  cartItems.innerHTML = `
    <div class="empty-cart">
      <span class="section-label">NO ITEMS</span>
      <h2>No items are in the cart.</h2>
      <a class="button button-primary" href="browse-beats.html">BROWSE BEATS</a>
    </div>
  `;
  cartSummary.innerHTML = '';
}

function downloadLabel(file) {
  if (/\.zip$/i.test(file)) return 'DOWNLOAD ZIP';
  if (/\.wav$/i.test(file)) return 'DOWNLOAD WAV';
  return 'DOWNLOAD MP3';
}

function downloadButtons(item, hasPaid) {
  if (!hasPaid) return '';

  const orderId = encodeURIComponent(hasPaid);
  const files = item.files && item.files.length ? item.files : [item.file].filter(Boolean);

  return files
    .map((downloadFile) => {
      const file = encodeURIComponent(downloadFile);
      return `<a class="button button-primary" href="/api/download?orderId=${orderId}&file=${file}">${downloadLabel(downloadFile)}</a>`;
    })
    .join('');
}

function setPaymentStatus(message) {
  const status = document.getElementById('paymentStatus');
  if (status) status.textContent = message;
}

function readCheckoutJson(response, fallbackMessage) {
  return response
    .json()
    .catch(() => ({}))
    .then((data) => {
      if (!response.ok) {
        throw new Error(data.error || fallbackMessage);
      }
      return data;
    });
}

function renderCart() {
  if (!cartItems || !cartSummary) return;

  if (!cart.length) {
    renderEmptyCart();
    return;
  }

  const normalizedCart = cart.map(normalizeCartItem);
  const hasPaid = paidOrderId();

  cartItems.innerHTML = normalizedCart
    .map((item, index) => {
      return `
        <article class="cart-item">
          <div>
            <h2>${escapeHtml(item.displayTitle)}</h2>
            <a class="text-link" href="${escapeHtml(premiumBeatPageUrl(item.title))}">VIEW BEAT</a>
          </div>
          <div class="cart-item-actions">
            <span>${escapeHtml(item.price)}</span>
            ${downloadButtons(item, hasPaid)}
            <button type="button" onclick="removeCartItem(${index})">REMOVE</button>
          </div>
        </article>
      `;
    })
    .join('');

  cartSummary.innerHTML = `
    <span class="section-label">SUMMARY</span>
    <div class="cart-summary-row">
      <span>Items</span>
      <strong>${normalizedCart.length}</strong>
    </div>
    <div class="cart-summary-row total">
      <span>Total</span>
      <strong>$${cartTotal(cart).toFixed(2)}</strong>
    </div>
    <div id="cartPayPalButtons"></div>
    <p id="paymentStatus" class="purchase-note">${hasPaid ? 'Payment verified by PayPal. Your protected downloads are available.' : 'Complete PayPal checkout to unlock protected downloads.'}</p>
    <button class="button button-secondary" type="button" onclick="clearCart()">CLEAR CART</button>
  `;

  if (!hasPaid) {
    renderCartPayPal(normalizedCart);
  }
}

function loadCartPayPalSdk(callback) {
  if (window.paypal) {
    callback();
    return;
  }

  fetch('/api/paypal/config')
    .then((response) => {
      if (!response.ok) {
        throw new Error(`PayPal config endpoint returned ${response.status}`);
      }
      return response.json();
    })
    .then((config) => {
      if (!config.clientId) throw new Error('Missing PayPal client ID.');

      const script = document.createElement('script');
      script.src = `https://www.paypal.com/sdk/js?client-id=${encodeURIComponent(config.clientId)}&currency=USD`;
      script.onload = callback;
      script.onerror = function () {
        setPaymentStatus('PayPal could not load. Check your PayPal client ID.');
      };
      document.head.appendChild(script);
    })
    .catch((error) => {
      console.error('PayPal setup error:', error);
      setPaymentStatus('PayPal checkout is unavailable because the server API routes are not running on this site.');
    });
}

function renderCartPayPal(items) {
  const buttonContainer = document.getElementById('cartPayPalButtons');
  if (!buttonContainer) return;

  loadCartPayPalSdk(() => {
    buttonContainer.innerHTML = '';
    paypal.Buttons({
      style: {
        layout: 'vertical',
        color: 'gold',
        shape: 'pill',
        label: 'pay',
      },
      createOrder: function (data, actions) {
        return fetch('/api/paypal/create-order', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ items }),
        })
          .then((response) => readCheckoutJson(response, 'PayPal order was not created.'))
          .then((order) => {
            if (!order.id) throw new Error(order.error || 'PayPal order was not created.');
            return order.id;
          })
          .catch((error) => {
            console.error('PayPal create order error:', error);
            setPaymentStatus('PayPal checkout could not start. Check the PayPal environment and credentials.');
            throw error;
          });
      },
      onApprove: function (data, actions) {
        return fetch('/api/paypal/capture-order', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ orderId: data.orderID }),
        })
          .then((response) => readCheckoutJson(response, 'PayPal capture failed.'))
          .then((details) => {
            if (details.status !== 'COMPLETED') {
              throw new Error(details.error || 'Payment was not completed.');
            }
            markCartPaid(data.orderID);
            renderCart();
          })
          .catch((error) => {
            console.error('PayPal capture error:', error);
            setPaymentStatus('PayPal payment could not be verified. Please try again.');
            throw error;
          });
      },
      onError: function (err) {
        console.error('PayPal checkout error:', err);
        setPaymentStatus('PayPal checkout failed. Please try again.');
      },
    }).render(buttonContainer);
  });
}

renderCart();
