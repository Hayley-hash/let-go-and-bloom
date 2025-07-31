<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Letting Go Ritual</title>
  <style>
    body {
      font-family: 'Arial', sans-serif;
      max-width: 800px;
      margin: 40px auto;
      padding: 20px;
      background-color: #f7f5f3;
      color: #333;
    }

    h2, h3 {
      color: #444;
    }

    select, textarea, button {
      width: 100%;
      margin-top: 15px;
      padding: 10px;
      font-size: 16px;
      border-radius: 5px;
      border: 1px solid #ccc;
    }

    button {
      background-color: #2b2b2b;
      color: #fff;
      cursor: pointer;
      font-weight: bold;
    }

    button:hover {
      background-color: #444;
    }

    #message {
      margin-top: 30px;
      padding: 20px;
      background-color: #fff;
      border: 1px solid #ddd;
      border-radius: 10px;
    }
  </style>
</head>
<body>

  <h2>🌿 Letting Go Ritual</h2>
  <p>Select the emotion you'd like to release:</p>

  <select id="emotionSelector">
    <option value="">-- Choose an emotion --</option>
    <option>Fear</option>
    <option>Shame</option>
    <option>Guilt</option>
    <option>Grief</option>
    <option>Sadness</option>
    <option>Anger</option>
  </select>

  <textarea id="releaseText" placeholder="Write what you’d like to let go of today…"></textarea>

  <button id="releaseButton">Release It</button>

  <div id="message"></div>

  <script>
    const emotionContent = {
      "Fear": {
        what: "Fear shows up when we feel unsafe or threatened, even if the danger is imagined.",
        body: "Fear activates our fight-or-flight system, often causing physical tension and emotional paralysis.",
        why: "You are safe now. You don’t need to carry fear any longer. Let it leave your body with your breath."
      },
      "Shame": {
        what: "Shame makes us feel we are not good enough or worthy of love.",
        body: "It can lead to avoidance, hiding, and isolation. Your worth is not up for debate.",
        why: "You are allowed to release shame. It no longer serves your growth."
      },
      "Guilt": {
        what: "Guilt tells us we did something wrong. But healing begins when we forgive ourselves.",
        body: "It weighs heavy on the heart and can trap us in the past.",
        why: "Let guilt go. You’ve done your best with the awareness you had."
      },
      "Grief": {
        what: "Grief is love with nowhere to go. It’s natural and worthy of compassion.",
        body: "Grief sits in the chest and throat, often bringing tears and longing.",
        why: "Let grief move through you. Holding it tightly doesn’t bring them back."
      },
      "Sadness": {
        what: "Sadness is the soul's way of asking for tenderness.",
        body: "It slows us down, invites introspection, and makes us feel heavy.",
        why: "Let sadness pass like a cloud. Joy is still within reach."
      },
      "Anger": {
        what: "Anger is often a boundary trying to speak. It’s powerful but needs release.",
        body: "It creates pressure, heat, and a desire to act out.",
        why: "You don’t need to hold it anymore. Let it melt away in stillness."
      }
    };

    document.getElementById("releaseButton").addEventListener("click", function () {
      const emotion = document.getElementById("emotionSelector").value;
      const journal = document.getElementById("releaseText").value;

      if (!emotion) {
        alert("Please select an emotion to release.");
        return;
      }

      const data = emotionContent[emotion];
      if (!data) {
        document.getElementById("message").innerHTML = `<p>Sorry, we don’t have content for that emotion yet.</p>`;
        return;
      }

      const content = `
        <h2>🖤 Emotion: ${emotion}</h2>
        <h3>🔍 What Is ${emotion}?</h3>
        <p>${data.what}</p>

        <h3>🧠 What It Does in the Body</h3>
        <p>${data.body}</p>

        <h3>🌬️ Why We Need to Release It</h3>
        <p>${data.why}</p>

        ${journal ? `<h3>📝 Your Reflection</h3><p>“<em>${journal}</em>”</p>` : ''}

        <h3>🌿 Letting Go Ritual</h3>
        <ul>
          <li>Find stillness and take 3 deep breaths.</li>
          <li>Say: “I release ${emotion.toLowerCase()} now. It no longer belongs to me.”</li>
          <li>Place your hand on your heart and feel the release.</li>
        </ul>

        <h3>💫 Affirmation</h3>
        <p><em>I am free from ${emotion.toLowerCase()}. I choose peace, power, and self-love.</em></p>
      `;

      document.getElementById("message").innerHTML = content;
    });
  </script>

</body>
</html>
