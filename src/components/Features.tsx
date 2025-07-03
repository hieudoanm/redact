import { FC } from 'react';

export const Features: FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h3 className="text-3xl font-semibold text-gray-900 sm:text-4xl">Why Use Our Redactor?</h3>
        <p className="mx-auto mt-4 max-w-2xl text-gray-600">
          Easily blackout sensitive information from your PDF documents. No uploads. No server. Just privacy.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border border-gray-200 p-6 shadow-sm">
            <h4 className="text-lg font-semibold text-gray-800">🛡️ Privacy-First</h4>
            <p className="mt-2 text-sm text-gray-600">
              Everything runs in your browser. Your files never leave your device.
            </p>
          </div>
          <div className="rounded-xl border border-gray-200 p-6 shadow-sm">
            <h4 className="text-lg font-semibold text-gray-800">📦 Easy Export</h4>
            <p className="mt-2 text-sm text-gray-600">
              One click to save your redacted PDF. No sign-up or install required.
            </p>
          </div>
          <div className="rounded-xl border border-gray-200 p-6 shadow-sm">
            <h4 className="text-lg font-semibold text-gray-800">🎯 Precise Control</h4>
            <p className="mt-2 text-sm text-gray-600">
              Draw exact black boxes where you want them with pixel precision.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
