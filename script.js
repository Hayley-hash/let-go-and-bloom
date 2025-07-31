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

