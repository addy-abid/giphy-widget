# Giphy Screen‑Flow Widget (Unmanaged Package)

This unmanaged package installs a Lightning Web Component that lets you drop a **Giphy Widget** into any Salesforce **Screen Flow**. At run‑time the widget fetches and displays a random GIF that matches a user‑supplied search term.

## Demo

![Screen Recording 2025-05-17 at 3 05 21 PM (1)](https://github.com/user-attachments/assets/e36ee504-2ad6-4e29-b022-be23d0ec55b6)

---

## Installation Links

| Environment                | Install URL                                                                                             |
| -------------------------- | ------------------------------------------------------------------------------------------------------- |
| **Production / Developer** | [Install in Production](https://login.salesforce.com/packaging/installPackage.apexp?p0=04tak0000008LnF) |
| **Sandbox**                | [Install in Sandbox](https://test.salesforce.com/packaging/installPackage.apexp?p0=04tak0000008LnF)     |


---

## Setup

1. **Install the package** using the links above.
2. **Create a Giphy developer account** at [https://developers.giphy.com/](https://developers.giphy.com/).
3. **Copy your API key** from the Giphy dashboard.
4. In Salesforce, go to **Setup ▸ Custom Metadata Types ▸ Manage Records** for **`Giphy_API__mdt`**.
5. Click **New** and enter:

   * **Label**: `Giphy`
   * **API Key**: *your Giphy API key*
6. Save the record.

---

## Using the Widget in a Flow

1. Open (or create) a **Screen Flow** in Flow Builder.
2. From the **Components** pane, drag **Giphy Widget** onto your screen.
3. Optionally expose the **Search Term** input so end users can type what they want to see.
4. Save & activate the flow. When the flow runs, the component fetches and shows a random GIF that matches the term.

---

## Support & Contributions

Because this is an unmanaged package, feel free to fork the repo and submit pull requests. For issues or questions, open a GitHub issue.

---
