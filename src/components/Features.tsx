import { FC } from 'react';

export const Features: FC = () => {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h3 className="text-3xl font-semibold sm:text-4xl">Why Use Our Redactor?</h3>
        <p className="mx-auto mt-4 max-w-2xl text-neutral-500">
          Easily blackout sensitive information from your PDF documents. No uploads. No server. Just privacy.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border border-neutral-800 p-6 shadow-sm">
            <h4 className="text-lg font-semibold">🛡️ Privacy-First</h4>
            <p className="mt-2 text-sm text-neutral-500">
              Everything runs in your browser. Your files never leave your device.
            </p>
          </div>
          <div className="rounded-xl border border-neutral-800 p-6 shadow-sm">
            <h4 className="text-lg font-semibold">📦 Easy Export</h4>
            <p className="mt-2 text-sm text-neutral-500">
              One click to save your redacted PDF. No sign-up or install required.
            </p>
          </div>
          <div className="rounded-xl border border-neutral-800 p-6 shadow-sm">
            <h4 className="text-lg font-semibold">🎯 Precise Control</h4>
            <p className="mt-2 text-sm text-neutral-500">
              Draw exact black boxes where you want them with pixel precision.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
