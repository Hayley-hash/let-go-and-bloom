<!DOCTYPE html>
<html>
<head>
  <title>Release Emotions</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 20px;
      background: #f6f6f9;
    }
    button {
      padding: 10px;
      margin: 4px;
      background-color: #7c3aed;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
    #message {
      margin-top: 30px;
      padding: 20px;
      background-color: white;
      border: 1px solid #ddd;
      border-radius: 5px;
    }
  </style>
</head>
<body>
  <h1>Release Portal</h1>
  <p>Click on an emotion you wish to release:</p>
  <div>
    <button onclick="releaseEmotion('Fear')">Fear</button>
    <button onclick="releaseEmotion('Shame')">Shame</button>
    <button onclick="releaseEmotion('Guilt')">Guilt</button>
    <button onclick="releaseEmotion('Grief')">Grief</button>
    <button onclick="releaseEmotion('Sadness')">Sadness</button>
    <button onclick="releaseEmotion('Anger')">Anger</button>
    <button onclick="releaseEmotion('Resentment')">Resentment</button>
    <button onclick="releaseEmotion('Jealousy')">Jealousy</button>
    <button onclick="releaseEmotion('Envy')">Envy</button>
    <button onclick="releaseEmotion('Bitterness')">Bitterness</button>
    <button onclick="releaseEmotion('Regret')">Regret</button>
    <button onclick="releaseEmotion('Loneliness')">Loneliness</button>
    <button onclick="releaseEmotion('Hopelessness')">Hopelessness</button>
    <button onclick="releaseEmotion('Helplessness')">Helplessness</button>
    <button onclick="releaseEmotion('Anxiety')">Anxiety</button>
    <button onclick="releaseEmotion('Dread')">Dread</button>
    <button onclick="releaseEmotion('Rejection')">Rejection</button>
    <button onclick="releaseEmotion('Abandonment')">Abandonment</button>
    <button onclick="releaseEmotion('Unworthiness')">Unworthiness</button>
    <button onclick="releaseEmotion('Self-hatred')">Self-hatred</button>
    <button onclick="releaseEmotion('Emptiness')">Emptiness</button>
    <button onclick="releaseEmotion('Despair')">Despair</button>
    <button onclick="releaseEmotion('Insecurity')">Insecurity</button>
    <button onclick="releaseEmotion('Disappointment')">Disappointment</button>
    <button onclick="releaseEmotion('Frustration')">Frustration</button>
    <button onclick="releaseEmotion('Overwhelm')">Overwhelm</button>
    <button onclick="releaseEmotion('Powerlessness')">Powerlessness</button>
    <button onclick="releaseEmotion('Embarrassment')">Embarrassment</button>
    <button onclick="releaseEmotion('Distrust')">Distrust</button>
    <button onclick="releaseEmotion('Loss')">Loss</button>
    <button onclick="releaseEmotion('Heartache')">Heartache</button>
    <button onclick="releaseEmotion('Longing')">Longing</button>
    <button onclick="releaseEmotion('Disconnection')">Disconnection</button>
    <button onclick="releaseEmotion('Neglect')">Neglect</button>
    <button onclick="releaseEmotion('Suppression')">Suppression</button>
    <button onclick="releaseEmotion('Shattered trust')">Shattered Trust</button>
    <button onclick="releaseEmotion('Confusion')">Confusion</button>
    <button onclick="releaseEmotion('Alienation')">Alienation</button>
    <button onclick="releaseEmotion('Terror')">Terror</button>
    <button onclick="releaseEmotion('Failure')">Failure</button>
    <button onclick="releaseEmotion('Repression')">Repression</button>
    <button onclick="releaseEmotion('Desperation')">Desperation</button>
    <button onclick="releaseEmotion('Resignation')">Resignation</button>
  </div>

  <div id="message"></div>
<script>
  function releaseEmotion(emotion) {
    let content = "";

    if (emotion === "Fear") {
      content = `
        <h2>🖤 Emotion: Fear</h2>
        <h3>🔍 What Is Fear?</h3>
        <p>Fear is an emotional response that arises from deep experience. It can be rooted in past wounds, conditioning, or unmet needs. But it is not your identity.</p>

        <h3>🧠 What It Does in the Body</h3>
        <p>Unprocessed fear manifests in the body as tension, fatigue, or dysregulation. It may impact your mood, health, or sense of safety.</p>

        <h3>🌬️ Why We Need to Release It</h3>
        <p>You deserve freedom. Releasing fear doesn't mean forgetting — it means honoring your truth and choosing peace now.</p>

        <h3>🌿 Letting Go Ritual</h3>
        <ul>
          <li>Close your eyes. Inhale deeply through your nose. Exhale fully.</li>
          <li>Say aloud: “I release fear with compassion and love.”</li>
          <li>Visualize the feeling leaving your body as soft light or smoke.</li>
        </ul>

        <h3>💫 Affirmation for Fear</h3>
        <p><em>I am free from fear. I choose peace, clarity, and self-love.</em></p>
      `;
    }

    if (emotion === "Shame") {
      content = `
        <h2>🖤 Emotion: Shame</h2>
        <h3>🔍 What Is Shame?</h3>
        <p>Shame is an emotional response that arises from deep experience. It can be rooted in past wounds, conditioning, or unmet needs. But it is not your identity.</p>

        <h3>🧠 What It Does in the Body</h3>
        <p>Unprocessed shame manifests in the body as tension, fatigue, or dysregulation. It may impact your mood, health, or sense of safety.</p>

        <h3>🌬️ Why We Need to Release It</h3>
        <p>You deserve freedom. Releasing shame doesn't mean forgetting — it means honoring your truth and choosing peace now.</p>

        <h3>🌿 Letting Go Ritual</h3>
        <ul>
          <li>Close your eyes. Inhale deeply through your nose. Exhale fully.</li>
          <li>Say aloud: “I release shame with compassion and love.”</li>
          <li>Visualize the feeling leaving your body as soft light or smoke.</li>
        </ul>

        <h3>💫 Affirmation for Shame</h3>
        <p><em>I am free from shame. I choose peace, clarity, and self-love.</em></p>
      `;
    }

    if (emotion === "Guilt") {
      content = `
        <h2>🖤 Emotion: Guilt</h2>
        <h3>🔍 What Is Guilt?</h3>
        <p>Guilt is an emotional response that arises from deep experience. It can be rooted in past wounds, conditioning, or unmet needs. But it is not your identity.</p>

        <h3>🧠 What It Does in the Body</h3>
        <p>Unprocessed guilt manifests in the body as tension, fatigue, or dysregulation. It may impact your mood, health, or sense of safety.</p>

        <h3>🌬️ Why We Need to Release It</h3>
        <p>You deserve freedom. Releasing guilt doesn't mean forgetting — it means honoring your truth and choosing peace now.</p>

        <h3>🌿 Letting Go Ritual</h3>
        <ul>
          <li>Close your eyes. Inhale deeply through your nose. Exhale fully.</li>
          <li>Say aloud: “I release guilt with compassion and love.”</li>
          <li>Visualize the feeling leaving your body as soft light or smoke.</li>
        </ul>

        <h3>💫 Affirmation for Guilt</h3>
        <p><em>I am free from guilt. I choose peace, clarity, and self-love.</em></p>
      `;
    }

    document.getElementById("message").innerHTML = content;
  }
</script>
</body>
</html>

