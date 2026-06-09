export default function Reservation() {
  return (
    <section className="reservation section section--lazy" id="reservation">
      <div className="reservation__inner">
        <div className="reservation__content">
          <span className="content-tagline reservation__tagline">
            Reserve a Table
          </span>
          <h2 className="content-title reservation__title">
            Your Perfect Evening Awaits
          </h2>
          <p className="content-desc reservation__desc">
            Whether it&apos;s a romantic dinner, a family celebration, or a
            business gathering — we&apos;ll make it memorable.
          </p>

          <div className="reservation__info">
            <div className="reservation__info-item">
              <div className="reservation__info-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div className="reservation__info-text">
                <h4>Location</h4>
                <span>42 Gourmet Avenue, Manhattan, NY 10012</span>
              </div>
            </div>
            <div className="reservation__info-item">
              <div className="reservation__info-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <div className="reservation__info-text">
                <h4>Phone</h4>
                <span>+1 (212) 555-0198</span>
              </div>
            </div>
            <div className="reservation__info-item">
              <div className="reservation__info-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <div className="reservation__info-text">
                <h4>Hours</h4>
                <span>Mon – Fri: 11 AM – 11 PM</span>
                <span>Sat – Sun: 10 AM – 12 AM</span>
              </div>
            </div>
            <div className="reservation__info-item">
              <div className="reservation__info-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              </div>
              <div className="reservation__info-text">
                <h4>Email</h4>
                <span>reservations@flavourhaven.com</span>
              </div>
            </div>
          </div>

          <div className="reservation__divider" />

          <p className="reservation__note">
            For parties of 8 or more, please call us directly.
          </p>
        </div>

        <div className="reservation__form-wrapper">
          <div className="reservation__form">
            <div className="reservation__form-accent" />

            <div className="reservation__form-header">
              <span className="reservation__form-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              </span>
              <h3 className="reservation__form-title">Book Your Table</h3>
              <p className="reservation__form-subtitle">
                Fill in the details and we&apos;ll confirm within 2 hours
              </p>
            </div>

            <form>
              <div className="reservation__form-grid">
                <div className="reservation__form-group">
                  <label htmlFor="res-name">Full Name</label>
                  <div className="reservation__input-wrap">
                    <svg className="reservation__input-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                    <input
                      type="text"
                      id="res-name"
                      placeholder="John Doe"
                      autoComplete="name"
                    />
                  </div>
                </div>
                <div className="reservation__form-group">
                  <label htmlFor="res-phone">Phone</label>
                  <div className="reservation__input-wrap">
                    <svg className="reservation__input-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    <input
                      type="tel"
                      id="res-phone"
                      placeholder="+1 (555) 000-0000"
                      autoComplete="tel"
                    />
                  </div>
                </div>
                <div className="reservation__form-group">
                  <label htmlFor="res-date">Date</label>
                  <div className="reservation__input-wrap">
                    <svg className="reservation__input-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                    <input type="date" id="res-date" />
                  </div>
                </div>
                <div className="reservation__form-group">
                  <label htmlFor="res-time">Time</label>
                  <div className="reservation__input-wrap">
                    <svg className="reservation__input-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    <select id="res-time" defaultValue="">
                      <option value="" disabled>Select time</option>
                      <option value="17:00">5:00 PM</option>
                      <option value="17:30">5:30 PM</option>
                      <option value="18:00">6:00 PM</option>
                      <option value="18:30">6:30 PM</option>
                      <option value="19:00">7:00 PM</option>
                      <option value="19:30">7:30 PM</option>
                      <option value="20:00">8:00 PM</option>
                      <option value="20:30">8:30 PM</option>
                      <option value="21:00">9:00 PM</option>
                      <option value="21:30">9:30 PM</option>
                    </select>
                  </div>
                </div>
                <div className="reservation__form-group">
                  <label htmlFor="res-guests">Guests</label>
                  <div className="reservation__input-wrap">
                    <svg className="reservation__input-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                    <select id="res-guests" defaultValue="2">
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="5">5 Guests</option>
                      <option value="6">6 Guests</option>
                      <option value="7">7 Guests</option>
                    </select>
                  </div>
                </div>
                <div className="reservation__form-group">
                  <label htmlFor="res-occasion">Occasion</label>
                  <div className="reservation__input-wrap">
                    <svg className="reservation__input-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
                    <select id="res-occasion" defaultValue="">
                      <option value="" disabled>Select occasion</option>
                      <option value="birthday">Birthday</option>
                      <option value="anniversary">Anniversary</option>
                      <option value="date">Date Night</option>
                      <option value="business">Business Dinner</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div className="reservation__form-group reservation__form-group--full">
                  <label htmlFor="res-notes">Special Requests</label>
                  <textarea
                    id="res-notes"
                    placeholder="Dietary requirements, seating preferences, allergies..."
                    rows={3}
                  />
                </div>
              </div>

              <button type="submit" className="reservation__form-submit">
                <span>Reserve Now</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </button>
            </form>

            <p className="reservation__form-footer">
              No credit card required &bull; Free cancellation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
