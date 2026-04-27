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
