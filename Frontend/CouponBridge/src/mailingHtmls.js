export const bookingEmail = (name, bookingId, coupons) => `
<div style="background:#f5f7fb; padding:20px; font-family:Arial, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px; margin:auto; background:#ffffff; border-radius:10px; overflow:hidden;">
    
    <tr>
      <td style="background:#4f46e5; color:white; text-align:center; padding:15px;">
        <h2>Booking Confirmed 🎉</h2>
      </td>
    </tr>

    <tr>
      <td style="padding:20px; text-align:center;">
        <h3>Hello ${name},</h3>
        <p>Your booking has been successfully confirmed.</p>
        <p><b>Booking ID:</b> ${bookingId}</p>
      </td>
    </tr>

    <tr>
      <td style="padding:20px;">
        <h4>Your Coupons:</h4>

        ${coupons.map(c => `
          <div style="border:1px dashed #4f46e5; padding:10px; margin-bottom:10px; text-align:center;">
            <h3 style="margin:0;">${c.code}</h3>
            <p style="margin:0;">₹${c.price}</p>
          </div>
        `).join("")}

      </td>
    </tr>

    <tr>
      <td style="padding:20px; text-align:center;">
        <p>Thank you for using our service 💜</p>
      </td>
    </tr>

  </table>
</div>
`;


export const publishEmail = (name, couponCode, price, expiryDate) => `<div style="background:#f5f7fb; padding:20px; font-family:Arial, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px; margin:auto; background:#ffffff; border-radius:10px; overflow:hidden;">
    
    <tr>
      <td style="background:#10b981; color:white; text-align:center; padding:15px;">
        <h2>Coupon Published Successfully 🚀</h2>
      </td>
    </tr>

    <tr>
      <td style="padding:20px; text-align:center;">
        <h3>Hello ${name},</h3>
        <p>Your coupon has been successfully published on our platform.</p>
      </td>
    </tr>

    <tr>
      <td style="padding:20px;">
        <div style="border:1px dashed #10b981; padding:15px; text-align:center;">
          <h2 style="margin:0;">${couponCode}</h2>
          <p style="margin:5px 0;">₹${price}</p>
          <p style="margin:0;">Valid Till: ${expiryDate}</p>
        </div>
      </td>
    </tr>

    <tr>
      <td style="padding:20px; text-align:center;">
        <p>Your coupon is now live and available for users 🎯</p>
        <p>Start earning as users purchase your coupon 💰</p>
      </td>
    </tr>

    <tr>
      <td style="padding:20px; text-align:center;">
        <p>Thank you for using our platform 💜</p>
      </td>
    </tr>

  </table>
</div>
`;

export const otpEmail = (name,otp,expiryMinutes) => `<div style="background:#f5f7fb; padding:20px; font-family:Arial, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px; margin:auto; background:#ffffff; border-radius:10px; overflow:hidden;">
    
    <tr>
      <td style="background:#f59e0b; color:white; text-align:center; padding:15px;">
        <h2>OTP Verification 🔐</h2>
      </td>
    </tr>

    <tr>
      <td style="padding:20px; text-align:center;">
        <h3>Hello ${name},</h3>
        <p>Your One-Time Password (OTP) has been generated.</p>
        <p>Please use the OTP below to proceed:</p>
      </td>
    </tr>

    <tr>
      <td style="padding:20px; text-align:center;">
        <div style="display:inline-block; padding:15px 25px; font-size:24px; letter-spacing:5px; font-weight:bold; background:#f3f4f6; border-radius:8px;">
          ${otp}
        </div>
      </td>
    </tr>

    <tr>
      <td style="padding:20px; text-align:center;">
        <p>This OTP is valid for <b>${expiryMinutes} seconds</b>.</p>
        <p>If you didn’t request this, you can safely ignore this email.</p>
      </td>
    </tr>

    <tr>
      <td style="padding:20px; text-align:center;">
        <p>Stay secure 🔒</p>
      </td>
    </tr>

  </table>
</div>
`;