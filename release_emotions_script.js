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
    <option>Resentment</option>
    <option>Jealousy</option>
    <option>Envy</option>
    <option>Bitterness</option>
    <option>Regret</option>
    <option>Loneliness</option>
    <option>Hopelessness</option>
    <option>Helplessness</option>
    <option>Anxiety</option>
    <option>Dread</option>
    <option>Rejection</option>
    <option>Abandonment</option>
    <option>Unworthiness</option>
    <option>Self-hatred</option>
    <option>Emptiness</option>
    <option>Despair</option>
    <option>Insecurity</option>
    <option>Disappointment</option>
    <option>Frustration</option>
    <option>Overwhelm</option>
    <option>Powerlessness</option>
    <option>Embarrassment</option>
    <option>Distrust</option>
    <option>Loss</option>
    <option>Heartache</option>
    <option>Longing</option>
    <option>Disconnection</option>
    <option>Neglect</option>
    <option>Suppression</option>
    <option>Confusion</option>
    <option>Alienation</option>
    <option>Terror</option>
    <option>Failure</option>
    <option>Repression</option>
    <option>Desperation</option>
    <option>Resignation</option>
  </select>

  <textarea id="releaseText" placeholder="Write what you’d like to let go of today…"></textarea>

  <button id="releaseButton">Release It</button>

  <div id="message"></div>

  <script>
    document.getElementById("releaseButton").addEventListener("click", function () {
      const emotion = document.getElementById("emotionSelector").value;
      const journal = document.getElementById("releaseText").value;

      if (!emotion) {
        alert("Please select an emotion to release.");
        return;
      }
 releaseEmotion(emotion);
});
        <h2>🖤 Emotion: ${emotion}</h2>
        <h3>🌬️ Release Reflection</h3>
        <p>You chose to release: <strong>${emotion}</strong>.</p>
        ${journal ? `<p>You wrote: “<em>${journal}</em>”</p>` : ''}
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

<script>
function releaseEmotion(emotion) {
  let content = '';

  if (emotion === "Fear") {
    content = `
      <h2>🖤 Emotion: Fear</h2>
      <h3>🔍 What Is Fear?</h3>
      <p>This is a placeholder description of fear — what it is, why we feel it, and where it shows up in our lives.</p>

      <h3>🧠 What It Does in the Body</h3>
      <p>Fear can create physical and emotional patterns that keep us stuck in the past. Acknowledging it is the first step toward healing.</p>

      <h3>🌬️ Why We Need to Release It</h3>
      <p>You are safe now. You don’t need to carry fear any longer. Let it leave your body with your breath.</p>

      <h3>🌿 Letting Go Ritual</h3>
      <ul>
        <li>Find stillness and take 3 deep breaths.</li>
        <li>Say: “I release fear now. It no longer belongs to me.”</li>
        <li>Place your hand on your heart and feel the release.</li>
      </ul>

      <h3>💫 Affirmation for Fear</h3>
      <p><em>I am free from fear. I choose peace, power, and self-love.</em></p>
    `;
  }


  if (emotion === "Shame") {
    content = `
      <h2>🖤 Emotion: Shame</h2>
      <h3>🔍 What Is Shame?</h3>
      <p>This is a placeholder description of shame — what it is, why we feel it, and where it shows up in our lives.</p>

      <h3>🧠 What It Does in the Body</h3>
      <p>Shame can create physical and emotional patterns that keep us stuck in the past. Acknowledging it is the first step toward healing.</p>

      <h3>🌬️ Why We Need to Release It</h3>
      <p>You are safe now. You don’t need to carry shame any longer. Let it leave your body with your breath.</p>

      <h3>🌿 Letting Go Ritual</h3>
      <ul>
        <li>Find stillness and take 3 deep breaths.</li>
        <li>Say: “I release shame now. It no longer belongs to me.”</li>
        <li>Place your hand on your heart and feel the release.</li>
      </ul>

      <h3>💫 Affirmation for Shame</h3>
      <p><em>I am free from shame. I choose peace, power, and self-love.</em></p>
    `;
  }


  if (emotion === "Guilt") {
    content = `
      <h2>🖤 Emotion: Guilt</h2>
      <h3>🔍 What Is Guilt?</h3>
      <p>This is a placeholder description of guilt — what it is, why we feel it, and where it shows up in our lives.</p>

      <h3>🧠 What It Does in the Body</h3>
      <p>Guilt can create physical and emotional patterns that keep us stuck in the past. Acknowledging it is the first step toward healing.</p>

      <h3>🌬️ Why We Need to Release It</h3>
      <p>You are safe now. You don’t need to carry guilt any longer. Let it leave your body with your breath.</p>

      <h3>🌿 Letting Go Ritual</h3>
      <ul>
        <li>Find stillness and take 3 deep breaths.</li>
        <li>Say: “I release guilt now. It no longer belongs to me.”</li>
        <li>Place your hand on your heart and feel the release.</li>
      </ul>

      <h3>💫 Affirmation for Guilt</h3>
      <p><em>I am free from guilt. I choose peace, power, and self-love.</em></p>
    `;
  }


  if (emotion === "Grief") {
    content = `
      <h2>🖤 Emotion: Grief</h2>
      <h3>🔍 What Is Grief?</h3>
      <p>This is a placeholder description of grief — what it is, why we feel it, and where it shows up in our lives.</p>

      <h3>🧠 What It Does in the Body</h3>
      <p>Grief can create physical and emotional patterns that keep us stuck in the past. Acknowledging it is the first step toward healing.</p>

      <h3>🌬️ Why We Need to Release It</h3>
      <p>You are safe now. You don’t need to carry grief any longer. Let it leave your body with your breath.</p>

      <h3>🌿 Letting Go Ritual</h3>
      <ul>
        <li>Find stillness and take 3 deep breaths.</li>
        <li>Say: “I release grief now. It no longer belongs to me.”</li>
        <li>Place your hand on your heart and feel the release.</li>
      </ul>

      <h3>💫 Affirmation for Grief</h3>
      <p><em>I am free from grief. I choose peace, power, and self-love.</em></p>
    `;
  }


  if (emotion === "Sadness") {
    content = `
      <h2>🖤 Emotion: Sadness</h2>
      <h3>🔍 What Is Sadness?</h3>
      <p>This is a placeholder description of sadness — what it is, why we feel it, and where it shows up in our lives.</p>

      <h3>🧠 What It Does in the Body</h3>
      <p>Sadness can create physical and emotional patterns that keep us stuck in the past. Acknowledging it is the first step toward healing.</p>

      <h3>🌬️ Why We Need to Release It</h3>
      <p>You are safe now. You don’t need to carry sadness any longer. Let it leave your body with your breath.</p>

      <h3>🌿 Letting Go Ritual</h3>
      <ul>
        <li>Find stillness and take 3 deep breaths.</li>
        <li>Say: “I release sadness now. It no longer belongs to me.”</li>
        <li>Place your hand on your heart and feel the release.</li>
      </ul>

      <h3>💫 Affirmation for Sadness</h3>
      <p><em>I am free from sadness. I choose peace, power, and self-love.</em></p>
    `;
  }


  if (emotion === "Anger") {
    content = `
      <h2>🖤 Emotion: Anger</h2>
      <h3>🔍 What Is Anger?</h3>
      <p>This is a placeholder description of anger — what it is, why we feel it, and where it shows up in our lives.</p>

      <h3>🧠 What It Does in the Body</h3>
      <p>Anger can create physical and emotional patterns that keep us stuck in the past. Acknowledging it is the first step toward healing.</p>

      <h3>🌬️ Why We Need to Release It</h3>
      <p>You are safe now. You don’t need to carry anger any longer. Let it leave your body with your breath.</p>

      <h3>🌿 Letting Go Ritual</h3>
      <ul>
        <li>Find stillness and take 3 deep breaths.</li>
        <li>Say: “I release anger now. It no longer belongs to me.”</li>
        <li>Place your hand on your heart and feel the release.</li>
      </ul>

      <h3>💫 Affirmation for Anger</h3>
      <p><em>I am free from anger. I choose peace, power, and self-love.</em></p>
    `;
  }


  if (emotion === "Resentment") {
    content = `
      <h2>🖤 Emotion: Resentment</h2>
      <h3>🔍 What Is Resentment?</h3>
      <p>This is a placeholder description of resentment — what it is, why we feel it, and where it shows up in our lives.</p>

      <h3>🧠 What It Does in the Body</h3>
      <p>Resentment can create physical and emotional patterns that keep us stuck in the past. Acknowledging it is the first step toward healing.</p>

      <h3>🌬️ Why We Need to Release It</h3>
      <p>You are safe now. You don’t need to carry resentment any longer. Let it leave your body with your breath.</p>

      <h3>🌿 Letting Go Ritual</h3>
      <ul>
        <li>Find stillness and take 3 deep breaths.</li>
        <li>Say: “I release resentment now. It no longer belongs to me.”</li>
        <li>Place your hand on your heart and feel the release.</li>
      </ul>

      <h3>💫 Affirmation for Resentment</h3>
      <p><em>I am free from resentment. I choose peace, power, and self-love.</em></p>
    `;
  }


  if (emotion === "Jealousy") {
    content = `
      <h2>🖤 Emotion: Jealousy</h2>
      <h3>🔍 What Is Jealousy?</h3>
      <p>This is a placeholder description of jealousy — what it is, why we feel it, and where it shows up in our lives.</p>

      <h3>🧠 What It Does in the Body</h3>
      <p>Jealousy can create physical and emotional patterns that keep us stuck in the past. Acknowledging it is the first step toward healing.</p>

      <h3>🌬️ Why We Need to Release It</h3>
      <p>You are safe now. You don’t need to carry jealousy any longer. Let it leave your body with your breath.</p>

      <h3>🌿 Letting Go Ritual</h3>
      <ul>
        <li>Find stillness and take 3 deep breaths.</li>
        <li>Say: “I release jealousy now. It no longer belongs to me.”</li>
        <li>Place your hand on your heart and feel the release.</li>
      </ul>

      <h3>💫 Affirmation for Jealousy</h3>
      <p><em>I am free from jealousy. I choose peace, power, and self-love.</em></p>
    `;
  }


  if (emotion === "Envy") {
    content = `
      <h2>🖤 Emotion: Envy</h2>
      <h3>🔍 What Is Envy?</h3>
      <p>This is a placeholder description of envy — what it is, why we feel it, and where it shows up in our lives.</p>

      <h3>🧠 What It Does in the Body</h3>
      <p>Envy can create physical and emotional patterns that keep us stuck in the past. Acknowledging it is the first step toward healing.</p>

      <h3>🌬️ Why We Need to Release It</h3>
      <p>You are safe now. You don’t need to carry envy any longer. Let it leave your body with your breath.</p>

      <h3>🌿 Letting Go Ritual</h3>
      <ul>
        <li>Find stillness and take 3 deep breaths.</li>
        <li>Say: “I release envy now. It no longer belongs to me.”</li>
        <li>Place your hand on your heart and feel the release.</li>
      </ul>

      <h3>💫 Affirmation for Envy</h3>
      <p><em>I am free from envy. I choose peace, power, and self-love.</em></p>
    `;
  }


  if (emotion === "Bitterness") {
    content = `
      <h2>🖤 Emotion: Bitterness</h2>
      <h3>🔍 What Is Bitterness?</h3>
      <p>This is a placeholder description of bitterness — what it is, why we feel it, and where it shows up in our lives.</p>

      <h3>🧠 What It Does in the Body</h3>
      <p>Bitterness can create physical and emotional patterns that keep us stuck in the past. Acknowledging it is the first step toward healing.</p>

      <h3>🌬️ Why We Need to Release It</h3>
      <p>You are safe now. You don’t need to carry bitterness any longer. Let it leave your body with your breath.</p>

      <h3>🌿 Letting Go Ritual</h3>
      <ul>
        <li>Find stillness and take 3 deep breaths.</li>
        <li>Say: “I release bitterness now. It no longer belongs to me.”</li>
        <li>Place your hand on your heart and feel the release.</li>
      </ul>

      <h3>💫 Affirmation for Bitterness</h3>
      <p><em>I am free from bitterness. I choose peace, power, and self-love.</em></p>
    `;
  }


  if (emotion === "Regret") {
    content = `
      <h2>🖤 Emotion: Regret</h2>
      <h3>🔍 What Is Regret?</h3>
      <p>This is a placeholder description of regret — what it is, why we feel it, and where it shows up in our lives.</p>

      <h3>🧠 What It Does in the Body</h3>
      <p>Regret can create physical and emotional patterns that keep us stuck in the past. Acknowledging it is the first step toward healing.</p>

      <h3>🌬️ Why We Need to Release It</h3>
      <p>You are safe now. You don’t need to carry regret any longer. Let it leave your body with your breath.</p>

      <h3>🌿 Letting Go Ritual</h3>
      <ul>
        <li>Find stillness and take 3 deep breaths.</li>
        <li>Say: “I release regret now. It no longer belongs to me.”</li>
        <li>Place your hand on your heart and feel the release.</li>
      </ul>

      <h3>💫 Affirmation for Regret</h3>
      <p><em>I am free from regret. I choose peace, power, and self-love.</em></p>
    `;
  }


  if (emotion === "Loneliness") {
    content = `
      <h2>🖤 Emotion: Loneliness</h2>
      <h3>🔍 What Is Loneliness?</h3>
      <p>This is a placeholder description of loneliness — what it is, why we feel it, and where it shows up in our lives.</p>

      <h3>🧠 What It Does in the Body</h3>
      <p>Loneliness can create physical and emotional patterns that keep us stuck in the past. Acknowledging it is the first step toward healing.</p>

      <h3>🌬️ Why We Need to Release It</h3>
      <p>You are safe now. You don’t need to carry loneliness any longer. Let it leave your body with your breath.</p>

      <h3>🌿 Letting Go Ritual</h3>
      <ul>
        <li>Find stillness and take 3 deep breaths.</li>
        <li>Say: “I release loneliness now. It no longer belongs to me.”</li>
        <li>Place your hand on your heart and feel the release.</li>
      </ul>

      <h3>💫 Affirmation for Loneliness</h3>
      <p><em>I am free from loneliness. I choose peace, power, and self-love.</em></p>
    `;
  }


  if (emotion === "Hopelessness") {
    content = `
      <h2>🖤 Emotion: Hopelessness</h2>
      <h3>🔍 What Is Hopelessness?</h3>
      <p>This is a placeholder description of hopelessness — what it is, why we feel it, and where it shows up in our lives.</p>

      <h3>🧠 What It Does in the Body</h3>
      <p>Hopelessness can create physical and emotional patterns that keep us stuck in the past. Acknowledging it is the first step toward healing.</p>

      <h3>🌬️ Why We Need to Release It</h3>
      <p>You are safe now. You don’t need to carry hopelessness any longer. Let it leave your body with your breath.</p>

      <h3>🌿 Letting Go Ritual</h3>
      <ul>
        <li>Find stillness and take 3 deep breaths.</li>
        <li>Say: “I release hopelessness now. It no longer belongs to me.”</li>
        <li>Place your hand on your heart and feel the release.</li>
      </ul>

      <h3>💫 Affirmation for Hopelessness</h3>
      <p><em>I am free from hopelessness. I choose peace, power, and self-love.</em></p>
    `;
  }


  if (emotion === "Helplessness") {
    content = `
      <h2>🖤 Emotion: Helplessness</h2>
      <h3>🔍 What Is Helplessness?</h3>
      <p>This is a placeholder description of helplessness — what it is, why we feel it, and where it shows up in our lives.</p>

      <h3>🧠 What It Does in the Body</h3>
      <p>Helplessness can create physical and emotional patterns that keep us stuck in the past. Acknowledging it is the first step toward healing.</p>

      <h3>🌬️ Why We Need to Release It</h3>
      <p>You are safe now. You don’t need to carry helplessness any longer. Let it leave your body with your breath.</p>

      <h3>🌿 Letting Go Ritual</h3>
      <ul>
        <li>Find stillness and take 3 deep breaths.</li>
        <li>Say: “I release helplessness now. It no longer belongs to me.”</li>
        <li>Place your hand on your heart and feel the release.</li>
      </ul>

      <h3>💫 Affirmation for Helplessness</h3>
      <p><em>I am free from helplessness. I choose peace, power, and self-love.</em></p>
    `;
  }


  if (emotion === "Anxiety") {
    content = `
      <h2>🖤 Emotion: Anxiety</h2>
      <h3>🔍 What Is Anxiety?</h3>
      <p>This is a placeholder description of anxiety — what it is, why we feel it, and where it shows up in our lives.</p>

      <h3>🧠 What It Does in the Body</h3>
      <p>Anxiety can create physical and emotional patterns that keep us stuck in the past. Acknowledging it is the first step toward healing.</p>

      <h3>🌬️ Why We Need to Release It</h3>
      <p>You are safe now. You don’t need to carry anxiety any longer. Let it leave your body with your breath.</p>

      <h3>🌿 Letting Go Ritual</h3>
      <ul>
        <li>Find stillness and take 3 deep breaths.</li>
        <li>Say: “I release anxiety now. It no longer belongs to me.”</li>
        <li>Place your hand on your heart and feel the release.</li>
      </ul>

      <h3>💫 Affirmation for Anxiety</h3>
      <p><em>I am free from anxiety. I choose peace, power, and self-love.</em></p>
    `;
  }


  if (emotion === "Dread") {
    content = `
      <h2>🖤 Emotion: Dread</h2>
      <h3>🔍 What Is Dread?</h3>
      <p>This is a placeholder description of dread — what it is, why we feel it, and where it shows up in our lives.</p>

      <h3>🧠 What It Does in the Body</h3>
      <p>Dread can create physical and emotional patterns that keep us stuck in the past. Acknowledging it is the first step toward healing.</p>

      <h3>🌬️ Why We Need to Release It</h3>
      <p>You are safe now. You don’t need to carry dread any longer. Let it leave your body with your breath.</p>

      <h3>🌿 Letting Go Ritual</h3>
      <ul>
        <li>Find stillness and take 3 deep breaths.</li>
        <li>Say: “I release dread now. It no longer belongs to me.”</li>
        <li>Place your hand on your heart and feel the release.</li>
      </ul>

      <h3>💫 Affirmation for Dread</h3>
      <p><em>I am free from dread. I choose peace, power, and self-love.</em></p>
    `;
  }


  if (emotion === "Rejection") {
    content = `
      <h2>🖤 Emotion: Rejection</h2>
      <h3>🔍 What Is Rejection?</h3>
      <p>This is a placeholder description of rejection — what it is, why we feel it, and where it shows up in our lives.</p>

      <h3>🧠 What It Does in the Body</h3>
      <p>Rejection can create physical and emotional patterns that keep us stuck in the past. Acknowledging it is the first step toward healing.</p>

      <h3>🌬️ Why We Need to Release It</h3>
      <p>You are safe now. You don’t need to carry rejection any longer. Let it leave your body with your breath.</p>

      <h3>🌿 Letting Go Ritual</h3>
      <ul>
        <li>Find stillness and take 3 deep breaths.</li>
        <li>Say: “I release rejection now. It no longer belongs to me.”</li>
        <li>Place your hand on your heart and feel the release.</li>
      </ul>

      <h3>💫 Affirmation for Rejection</h3>
      <p><em>I am free from rejection. I choose peace, power, and self-love.</em></p>
    `;
  }


  if (emotion === "Abandonment") {
    content = `
      <h2>🖤 Emotion: Abandonment</h2>
      <h3>🔍 What Is Abandonment?</h3>
      <p>This is a placeholder description of abandonment — what it is, why we feel it, and where it shows up in our lives.</p>

      <h3>🧠 What It Does in the Body</h3>
      <p>Abandonment can create physical and emotional patterns that keep us stuck in the past. Acknowledging it is the first step toward healing.</p>

      <h3>🌬️ Why We Need to Release It</h3>
      <p>You are safe now. You don’t need to carry abandonment any longer. Let it leave your body with your breath.</p>

      <h3>🌿 Letting Go Ritual</h3>
      <ul>
        <li>Find stillness and take 3 deep breaths.</li>
        <li>Say: “I release abandonment now. It no longer belongs to me.”</li>
        <li>Place your hand on your heart and feel the release.</li>
      </ul>

      <h3>💫 Affirmation for Abandonment</h3>
      <p><em>I am free from abandonment. I choose peace, power, and self-love.</em></p>
    `;
  }


  if (emotion === "Unworthiness") {
    content = `
      <h2>🖤 Emotion: Unworthiness</h2>
      <h3>🔍 What Is Unworthiness?</h3>
      <p>This is a placeholder description of unworthiness — what it is, why we feel it, and where it shows up in our lives.</p>

      <h3>🧠 What It Does in the Body</h3>
      <p>Unworthiness can create physical and emotional patterns that keep us stuck in the past. Acknowledging it is the first step toward healing.</p>

      <h3>🌬️ Why We Need to Release It</h3>
      <p>You are safe now. You don’t need to carry unworthiness any longer. Let it leave your body with your breath.</p>

      <h3>🌿 Letting Go Ritual</h3>
      <ul>
        <li>Find stillness and take 3 deep breaths.</li>
        <li>Say: “I release unworthiness now. It no longer belongs to me.”</li>
        <li>Place your hand on your heart and feel the release.</li>
      </ul>

      <h3>💫 Affirmation for Unworthiness</h3>
      <p><em>I am free from unworthiness. I choose peace, power, and self-love.</em></p>
    `;
  }


  if (emotion === "Self-hatred") {
    content = `
      <h2>🖤 Emotion: Self-hatred</h2>
      <h3>🔍 What Is Self-hatred?</h3>
      <p>This is a placeholder description of self-hatred — what it is, why we feel it, and where it shows up in our lives.</p>

      <h3>🧠 What It Does in the Body</h3>
      <p>Self-hatred can create physical and emotional patterns that keep us stuck in the past. Acknowledging it is the first step toward healing.</p>

      <h3>🌬️ Why We Need to Release It</h3>
      <p>You are safe now. You don’t need to carry self-hatred any longer. Let it leave your body with your breath.</p>

      <h3>🌿 Letting Go Ritual</h3>
      <ul>
        <li>Find stillness and take 3 deep breaths.</li>
        <li>Say: “I release self-hatred now. It no longer belongs to me.”</li>
        <li>Place your hand on your heart and feel the release.</li>
      </ul>

      <h3>💫 Affirmation for Self-hatred</h3>
      <p><em>I am free from self-hatred. I choose peace, power, and self-love.</em></p>
    `;
  }


  if (emotion === "Emptiness") {
    content = `
      <h2>🖤 Emotion: Emptiness</h2>
      <h3>🔍 What Is Emptiness?</h3>
      <p>This is a placeholder description of emptiness — what it is, why we feel it, and where it shows up in our lives.</p>

      <h3>🧠 What It Does in the Body</h3>
      <p>Emptiness can create physical and emotional patterns that keep us stuck in the past. Acknowledging it is the first step toward healing.</p>

      <h3>🌬️ Why We Need to Release It</h3>
      <p>You are safe now. You don’t need to carry emptiness any longer. Let it leave your body with your breath.</p>

      <h3>🌿 Letting Go Ritual</h3>
      <ul>
        <li>Find stillness and take 3 deep breaths.</li>
        <li>Say: “I release emptiness now. It no longer belongs to me.”</li>
        <li>Place your hand on your heart and feel the release.</li>
      </ul>

      <h3>💫 Affirmation for Emptiness</h3>
      <p><em>I am free from emptiness. I choose peace, power, and self-love.</em></p>
    `;
  }


  if (emotion === "Despair") {
    content = `
      <h2>🖤 Emotion: Despair</h2>
      <h3>🔍 What Is Despair?</h3>
      <p>This is a placeholder description of despair — what it is, why we feel it, and where it shows up in our lives.</p>

      <h3>🧠 What It Does in the Body</h3>
      <p>Despair can create physical and emotional patterns that keep us stuck in the past. Acknowledging it is the first step toward healing.</p>

      <h3>🌬️ Why We Need to Release It</h3>
      <p>You are safe now. You don’t need to carry despair any longer. Let it leave your body with your breath.</p>

      <h3>🌿 Letting Go Ritual</h3>
      <ul>
        <li>Find stillness and take 3 deep breaths.</li>
        <li>Say: “I release despair now. It no longer belongs to me.”</li>
        <li>Place your hand on your heart and feel the release.</li>
      </ul>

      <h3>💫 Affirmation for Despair</h3>
      <p><em>I am free from despair. I choose peace, power, and self-love.</em></p>
    `;
  }


  if (emotion === "Insecurity") {
    content = `
      <h2>🖤 Emotion: Insecurity</h2>
      <h3>🔍 What Is Insecurity?</h3>
      <p>This is a placeholder description of insecurity — what it is, why we feel it, and where it shows up in our lives.</p>

      <h3>🧠 What It Does in the Body</h3>
      <p>Insecurity can create physical and emotional patterns that keep us stuck in the past. Acknowledging it is the first step toward healing.</p>

      <h3>🌬️ Why We Need to Release It</h3>
      <p>You are safe now. You don’t need to carry insecurity any longer. Let it leave your body with your breath.</p>

      <h3>🌿 Letting Go Ritual</h3>
      <ul>
        <li>Find stillness and take 3 deep breaths.</li>
        <li>Say: “I release insecurity now. It no longer belongs to me.”</li>
        <li>Place your hand on your heart and feel the release.</li>
      </ul>

      <h3>💫 Affirmation for Insecurity</h3>
      <p><em>I am free from insecurity. I choose peace, power, and self-love.</em></p>
    `;
  }


  if (emotion === "Disappointment") {
    content = `
      <h2>🖤 Emotion: Disappointment</h2>
      <h3>🔍 What Is Disappointment?</h3>
      <p>This is a placeholder description of disappointment — what it is, why we feel it, and where it shows up in our lives.</p>

      <h3>🧠 What It Does in the Body</h3>
      <p>Disappointment can create physical and emotional patterns that keep us stuck in the past. Acknowledging it is the first step toward healing.</p>

      <h3>🌬️ Why We Need to Release It</h3>
      <p>You are safe now. You don’t need to carry disappointment any longer. Let it leave your body with your breath.</p>

      <h3>🌿 Letting Go Ritual</h3>
      <ul>
        <li>Find stillness and take 3 deep breaths.</li>
        <li>Say: “I release disappointment now. It no longer belongs to me.”</li>
        <li>Place your hand on your heart and feel the release.</li>
      </ul>

      <h3>💫 Affirmation for Disappointment</h3>
      <p><em>I am free from disappointment. I choose peace, power, and self-love.</em></p>
    `;
  }


  if (emotion === "Frustration") {
    content = `
      <h2>🖤 Emotion: Frustration</h2>
      <h3>🔍 What Is Frustration?</h3>
      <p>This is a placeholder description of frustration — what it is, why we feel it, and where it shows up in our lives.</p>

      <h3>🧠 What It Does in the Body</h3>
      <p>Frustration can create physical and emotional patterns that keep us stuck in the past. Acknowledging it is the first step toward healing.</p>

      <h3>🌬️ Why We Need to Release It</h3>
      <p>You are safe now. You don’t need to carry frustration any longer. Let it leave your body with your breath.</p>

      <h3>🌿 Letting Go Ritual</h3>
      <ul>
        <li>Find stillness and take 3 deep breaths.</li>
        <li>Say: “I release frustration now. It no longer belongs to me.”</li>
        <li>Place your hand on your heart and feel the release.</li>
      </ul>

      <h3>💫 Affirmation for Frustration</h3>
      <p><em>I am free from frustration. I choose peace, power, and self-love.</em></p>
    `;
  }


  if (emotion === "Overwhelm") {
    content = `
      <h2>🖤 Emotion: Overwhelm</h2>
      <h3>🔍 What Is Overwhelm?</h3>
      <p>This is a placeholder description of overwhelm — what it is, why we feel it, and where it shows up in our lives.</p>

      <h3>🧠 What It Does in the Body</h3>
      <p>Overwhelm can create physical and emotional patterns that keep us stuck in the past. Acknowledging it is the first step toward healing.</p>

      <h3>🌬️ Why We Need to Release It</h3>
      <p>You are safe now. You don’t need to carry overwhelm any longer. Let it leave your body with your breath.</p>

      <h3>🌿 Letting Go Ritual</h3>
      <ul>
        <li>Find stillness and take 3 deep breaths.</li>
        <li>Say: “I release overwhelm now. It no longer belongs to me.”</li>
        <li>Place your hand on your heart and feel the release.</li>
      </ul>

      <h3>💫 Affirmation for Overwhelm</h3>
      <p><em>I am free from overwhelm. I choose peace, power, and self-love.</em></p>
    `;
  }


  if (emotion === "Powerlessness") {
    content = `
      <h2>🖤 Emotion: Powerlessness</h2>
      <h3>🔍 What Is Powerlessness?</h3>
      <p>This is a placeholder description of powerlessness — what it is, why we feel it, and where it shows up in our lives.</p>

      <h3>🧠 What It Does in the Body</h3>
      <p>Powerlessness can create physical and emotional patterns that keep us stuck in the past. Acknowledging it is the first step toward healing.</p>

      <h3>🌬️ Why We Need to Release It</h3>
      <p>You are safe now. You don’t need to carry powerlessness any longer. Let it leave your body with your breath.</p>

      <h3>🌿 Letting Go Ritual</h3>
      <ul>
        <li>Find stillness and take 3 deep breaths.</li>
        <li>Say: “I release powerlessness now. It no longer belongs to me.”</li>
        <li>Place your hand on your heart and feel the release.</li>
      </ul>

      <h3>💫 Affirmation for Powerlessness</h3>
      <p><em>I am free from powerlessness. I choose peace, power, and self-love.</em></p>
    `;
  }


  if (emotion === "Embarrassment") {
    content = `
      <h2>🖤 Emotion: Embarrassment</h2>
      <h3>🔍 What Is Embarrassment?</h3>
      <p>This is a placeholder description of embarrassment — what it is, why we feel it, and where it shows up in our lives.</p>

      <h3>🧠 What It Does in the Body</h3>
      <p>Embarrassment can create physical and emotional patterns that keep us stuck in the past. Acknowledging it is the first step toward healing.</p>

      <h3>🌬️ Why We Need to Release It</h3>
      <p>You are safe now. You don’t need to carry embarrassment any longer. Let it leave your body with your breath.</p>

      <h3>🌿 Letting Go Ritual</h3>
      <ul>
        <li>Find stillness and take 3 deep breaths.</li>
        <li>Say: “I release embarrassment now. It no longer belongs to me.”</li>
        <li>Place your hand on your heart and feel the release.</li>
      </ul>

      <h3>💫 Affirmation for Embarrassment</h3>
      <p><em>I am free from embarrassment. I choose peace, power, and self-love.</em></p>
    `;
  }


  if (emotion === "Distrust") {
    content = `
      <h2>🖤 Emotion: Distrust</h2>
      <h3>🔍 What Is Distrust?</h3>
      <p>This is a placeholder description of distrust — what it is, why we feel it, and where it shows up in our lives.</p>

      <h3>🧠 What It Does in the Body</h3>
      <p>Distrust can create physical and emotional patterns that keep us stuck in the past. Acknowledging it is the first step toward healing.</p>

      <h3>🌬️ Why We Need to Release It</h3>
      <p>You are safe now. You don’t need to carry distrust any longer. Let it leave your body with your breath.</p>

      <h3>🌿 Letting Go Ritual</h3>
      <ul>
        <li>Find stillness and take 3 deep breaths.</li>
        <li>Say: “I release distrust now. It no longer belongs to me.”</li>
        <li>Place your hand on your heart and feel the release.</li>
      </ul>

      <h3>💫 Affirmation for Distrust</h3>
      <p><em>I am free from distrust. I choose peace, power, and self-love.</em></p>
    `;
  }


  if (emotion === "Loss") {
    content = `
      <h2>🖤 Emotion: Loss</h2>
      <h3>🔍 What Is Loss?</h3>
      <p>This is a placeholder description of loss — what it is, why we feel it, and where it shows up in our lives.</p>

      <h3>🧠 What It Does in the Body</h3>
      <p>Loss can create physical and emotional patterns that keep us stuck in the past. Acknowledging it is the first step toward healing.</p>

      <h3>🌬️ Why We Need to Release It</h3>
      <p>You are safe now. You don’t need to carry loss any longer. Let it leave your body with your breath.</p>

      <h3>🌿 Letting Go Ritual</h3>
      <ul>
        <li>Find stillness and take 3 deep breaths.</li>
        <li>Say: “I release loss now. It no longer belongs to me.”</li>
        <li>Place your hand on your heart and feel the release.</li>
      </ul>

      <h3>💫 Affirmation for Loss</h3>
      <p><em>I am free from loss. I choose peace, power, and self-love.</em></p>
    `;
  }


  if (emotion === "Heartache") {
    content = `
      <h2>🖤 Emotion: Heartache</h2>
      <h3>🔍 What Is Heartache?</h3>
      <p>This is a placeholder description of heartache — what it is, why we feel it, and where it shows up in our lives.</p>

      <h3>🧠 What It Does in the Body</h3>
      <p>Heartache can create physical and emotional patterns that keep us stuck in the past. Acknowledging it is the first step toward healing.</p>

      <h3>🌬️ Why We Need to Release It</h3>
      <p>You are safe now. You don’t need to carry heartache any longer. Let it leave your body with your breath.</p>

      <h3>🌿 Letting Go Ritual</h3>
      <ul>
        <li>Find stillness and take 3 deep breaths.</li>
        <li>Say: “I release heartache now. It no longer belongs to me.”</li>
        <li>Place your hand on your heart and feel the release.</li>
      </ul>

      <h3>💫 Affirmation for Heartache</h3>
      <p><em>I am free from heartache. I choose peace, power, and self-love.</em></p>
    `;
  }


  if (emotion === "Longing") {
    content = `
      <h2>🖤 Emotion: Longing</h2>
      <h3>🔍 What Is Longing?</h3>
      <p>This is a placeholder description of longing — what it is, why we feel it, and where it shows up in our lives.</p>

      <h3>🧠 What It Does in the Body</h3>
      <p>Longing can create physical and emotional patterns that keep us stuck in the past. Acknowledging it is the first step toward healing.</p>

      <h3>🌬️ Why We Need to Release It</h3>
      <p>You are safe now. You don’t need to carry longing any longer. Let it leave your body with your breath.</p>

      <h3>🌿 Letting Go Ritual</h3>
      <ul>
        <li>Find stillness and take 3 deep breaths.</li>
        <li>Say: “I release longing now. It no longer belongs to me.”</li>
        <li>Place your hand on your heart and feel the release.</li>
      </ul>

      <h3>💫 Affirmation for Longing</h3>
      <p><em>I am free from longing. I choose peace, power, and self-love.</em></p>
    `;
  }


  if (emotion === "Disconnection") {
    content = `
      <h2>🖤 Emotion: Disconnection</h2>
      <h3>🔍 What Is Disconnection?</h3>
      <p>This is a placeholder description of disconnection — what it is, why we feel it, and where it shows up in our lives.</p>

      <h3>🧠 What It Does in the Body</h3>
      <p>Disconnection can create physical and emotional patterns that keep us stuck in the past. Acknowledging it is the first step toward healing.</p>

      <h3>🌬️ Why We Need to Release It</h3>
      <p>You are safe now. You don’t need to carry disconnection any longer. Let it leave your body with your breath.</p>

      <h3>🌿 Letting Go Ritual</h3>
      <ul>
        <li>Find stillness and take 3 deep breaths.</li>
        <li>Say: “I release disconnection now. It no longer belongs to me.”</li>
        <li>Place your hand on your heart and feel the release.</li>
      </ul>

      <h3>💫 Affirmation for Disconnection</h3>
      <p><em>I am free from disconnection. I choose peace, power, and self-love.</em></p>
    `;
  }


  if (emotion === "Neglect") {
    content = `
      <h2>🖤 Emotion: Neglect</h2>
      <h3>🔍 What Is Neglect?</h3>
      <p>This is a placeholder description of neglect — what it is, why we feel it, and where it shows up in our lives.</p>

      <h3>🧠 What It Does in the Body</h3>
      <p>Neglect can create physical and emotional patterns that keep us stuck in the past. Acknowledging it is the first step toward healing.</p>

      <h3>🌬️ Why We Need to Release It</h3>
      <p>You are safe now. You don’t need to carry neglect any longer. Let it leave your body with your breath.</p>

      <h3>🌿 Letting Go Ritual</h3>
      <ul>
        <li>Find stillness and take 3 deep breaths.</li>
        <li>Say: “I release neglect now. It no longer belongs to me.”</li>
        <li>Place your hand on your heart and feel the release.</li>
      </ul>

      <h3>💫 Affirmation for Neglect</h3>
      <p><em>I am free from neglect. I choose peace, power, and self-love.</em></p>
    `;
  }


  if (emotion === "Suppression") {
    content = `
      <h2>🖤 Emotion: Suppression</h2>
      <h3>🔍 What Is Suppression?</h3>
      <p>This is a placeholder description of suppression — what it is, why we feel it, and where it shows up in our lives.</p>

      <h3>🧠 What It Does in the Body</h3>
      <p>Suppression can create physical and emotional patterns that keep us stuck in the past. Acknowledging it is the first step toward healing.</p>

      <h3>🌬️ Why We Need to Release It</h3>
      <p>You are safe now. You don’t need to carry suppression any longer. Let it leave your body with your breath.</p>

      <h3>🌿 Letting Go Ritual</h3>
      <ul>
        <li>Find stillness and take 3 deep breaths.</li>
        <li>Say: “I release suppression now. It no longer belongs to me.”</li>
        <li>Place your hand on your heart and feel the release.</li>
      </ul>

      <h3>💫 Affirmation for Suppression</h3>
      <p><em>I am free from suppression. I choose peace, power, and self-love.</em></p>
    `;
  }


  if (emotion === "Confusion") {
    content = `
      <h2>🖤 Emotion: Confusion</h2>
      <h3>🔍 What Is Confusion?</h3>
      <p>This is a placeholder description of confusion — what it is, why we feel it, and where it shows up in our lives.</p>

      <h3>🧠 What It Does in the Body</h3>
      <p>Confusion can create physical and emotional patterns that keep us stuck in the past. Acknowledging it is the first step toward healing.</p>

      <h3>🌬️ Why We Need to Release It</h3>
      <p>You are safe now. You don’t need to carry confusion any longer. Let it leave your body with your breath.</p>

      <h3>🌿 Letting Go Ritual</h3>
      <ul>
        <li>Find stillness and take 3 deep breaths.</li>
        <li>Say: “I release confusion now. It no longer belongs to me.”</li>
        <li>Place your hand on your heart and feel the release.</li>
      </ul>

      <h3>💫 Affirmation for Confusion</h3>
      <p><em>I am free from confusion. I choose peace, power, and self-love.</em></p>
    `;
  }


  if (emotion === "Alienation") {
    content = `
      <h2>🖤 Emotion: Alienation</h2>
      <h3>🔍 What Is Alienation?</h3>
      <p>This is a placeholder description of alienation — what it is, why we feel it, and where it shows up in our lives.</p>

      <h3>🧠 What It Does in the Body</h3>
      <p>Alienation can create physical and emotional patterns that keep us stuck in the past. Acknowledging it is the first step toward healing.</p>

      <h3>🌬️ Why We Need to Release It</h3>
      <p>You are safe now. You don’t need to carry alienation any longer. Let it leave your body with your breath.</p>

      <h3>🌿 Letting Go Ritual</h3>
      <ul>
        <li>Find stillness and take 3 deep breaths.</li>
        <li>Say: “I release alienation now. It no longer belongs to me.”</li>
        <li>Place your hand on your heart and feel the release.</li>
      </ul>

      <h3>💫 Affirmation for Alienation</h3>
      <p><em>I am free from alienation. I choose peace, power, and self-love.</em></p>
    `;
  }


  if (emotion === "Terror") {
    content = `
      <h2>🖤 Emotion: Terror</h2>
      <h3>🔍 What Is Terror?</h3>
      <p>This is a placeholder description of terror — what it is, why we feel it, and where it shows up in our lives.</p>

      <h3>🧠 What It Does in the Body</h3>
      <p>Terror can create physical and emotional patterns that keep us stuck in the past. Acknowledging it is the first step toward healing.</p>

      <h3>🌬️ Why We Need to Release It</h3>
      <p>You are safe now. You don’t need to carry terror any longer. Let it leave your body with your breath.</p>

      <h3>🌿 Letting Go Ritual</h3>
      <ul>
        <li>Find stillness and take 3 deep breaths.</li>
        <li>Say: “I release terror now. It no longer belongs to me.”</li>
        <li>Place your hand on your heart and feel the release.</li>
      </ul>

      <h3>💫 Affirmation for Terror</h3>
      <p><em>I am free from terror. I choose peace, power, and self-love.</em></p>
    `;
  }


  if (emotion === "Failure") {
    content = `
      <h2>🖤 Emotion: Failure</h2>
      <h3>🔍 What Is Failure?</h3>
      <p>This is a placeholder description of failure — what it is, why we feel it, and where it shows up in our lives.</p>

      <h3>🧠 What It Does in the Body</h3>
      <p>Failure can create physical and emotional patterns that keep us stuck in the past. Acknowledging it is the first step toward healing.</p>

      <h3>🌬️ Why We Need to Release It</h3>
      <p>You are safe now. You don’t need to carry failure any longer. Let it leave your body with your breath.</p>

      <h3>🌿 Letting Go Ritual</h3>
      <ul>
        <li>Find stillness and take 3 deep breaths.</li>
        <li>Say: “I release failure now. It no longer belongs to me.”</li>
        <li>Place your hand on your heart and feel the release.</li>
      </ul>

      <h3>💫 Affirmation for Failure</h3>
      <p><em>I am free from failure. I choose peace, power, and self-love.</em></p>
    `;
  }


  if (emotion === "Repression") {
    content = `
      <h2>🖤 Emotion: Repression</h2>
      <h3>🔍 What Is Repression?</h3>
      <p>This is a placeholder description of repression — what it is, why we feel it, and where it shows up in our lives.</p>

      <h3>🧠 What It Does in the Body</h3>
      <p>Repression can create physical and emotional patterns that keep us stuck in the past. Acknowledging it is the first step toward healing.</p>

      <h3>🌬️ Why We Need to Release It</h3>
      <p>You are safe now. You don’t need to carry repression any longer. Let it leave your body with your breath.</p>

      <h3>🌿 Letting Go Ritual</h3>
      <ul>
        <li>Find stillness and take 3 deep breaths.</li>
        <li>Say: “I release repression now. It no longer belongs to me.”</li>
        <li>Place your hand on your heart and feel the release.</li>
      </ul>

      <h3>💫 Affirmation for Repression</h3>
      <p><em>I am free from repression. I choose peace, power, and self-love.</em></p>
    `;
  }


  if (emotion === "Desperation") {
    content = `
      <h2>🖤 Emotion: Desperation</h2>
      <h3>🔍 What Is Desperation?</h3>
      <p>This is a placeholder description of desperation — what it is, why we feel it, and where it shows up in our lives.</p>

      <h3>🧠 What It Does in the Body</h3>
      <p>Desperation can create physical and emotional patterns that keep us stuck in the past. Acknowledging it is the first step toward healing.</p>

      <h3>🌬️ Why We Need to Release It</h3>
      <p>You are safe now. You don’t need to carry desperation any longer. Let it leave your body with your breath.</p>

      <h3>🌿 Letting Go Ritual</h3>
      <ul>
        <li>Find stillness and take 3 deep breaths.</li>
        <li>Say: “I release desperation now. It no longer belongs to me.”</li>
        <li>Place your hand on your heart and feel the release.</li>
      </ul>

      <h3>💫 Affirmation for Desperation</h3>
      <p><em>I am free from desperation. I choose peace, power, and self-love.</em></p>
    `;
  }


  if (emotion === "Resignation") {
    content = `
      <h2>🖤 Emotion: Resignation</h2>
      <h3>🔍 What Is Resignation?</h3>
      <p>This is a placeholder description of resignation — what it is, why we feel it, and where it shows up in our lives.</p>

      <h3>🧠 What It Does in the Body</h3>
      <p>Resignation can create physical and emotional patterns that keep us stuck in the past. Acknowledging it is the first step toward healing.</p>

      <h3>🌬️ Why We Need to Release It</h3>
      <p>You are safe now. You don’t need to carry resignation any longer. Let it leave your body with your breath.</p>

      <h3>🌿 Letting Go Ritual</h3>
      <ul>
        <li>Find stillness and take 3 deep breaths.</li>
        <li>Say: “I release resignation now. It no longer belongs to me.”</li>
        <li>Place your hand on your heart and feel the release.</li>
      </ul>

      <h3>💫 Affirmation for Resignation</h3>
      <p><em>I am free from resignation. I choose peace, power, and self-love.</em></p>
    `;
  }

  document.getElementById('message').innerHTML = content;
}
</script>
