<script src="https://cdn.jsdelivr.net/npm/marked@12.0.2/marked.min.js"></script>
<script src="assets/initiative.js"></script>

<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Troika! Initiative Tracker</title>
    <style>
        :root {
            --bg-color: #f0e6d6;
            --main-color: #333;
            --accent-color: #e2a05d;
            --border-color: #d1c1a9;
            --token-bg: #fff;
            --token-border: #ccc;
            --header-font: 'Georgia', serif;
        }
        body {
            font-family: Arial, sans-serif;
            color: var(--main-color);
            margin: 0;
            padding: 20px;
            display: flex;
            justify-content: center;
            align-items: flex-start;
            min-height: 100vh;
        }
        #app-container {
            display: flex;
            flex-direction: column;
            gap: 20px;
            width: 100%;
            max-width: 900px;
            background-color: #fff;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        header {
            text-align: center;
            font-family: var(--header-font);
            margin-bottom: 20px;
        }
        header h1 {
            font-size: 2.5em;
            color: var(--accent-color);
            margin: 0;
        }
        .controls, .participants-list, .tracker-area {
            border: 1px solid var(--border-color);
            border-radius: 6px;
            padding: 20px;
            background-color: #fdfaf5;
        }
        .controls h2, .participants-list h2, .tracker-area h2 {
            margin-top: 0;
            font-size: 1.5em;
            color: var(--accent-color);
        }
        .input-group {
            display: flex;
            gap: 10px;
            margin-bottom: 15px;
            flex-wrap: wrap;
        }
        .input-group input, .input-group button, .input-group label {
            padding: 10px;
            font-size: 1em;
            border: 1px solid var(--border-color);
            border-radius: 4px;
        }
        .input-group input[type="text"] {
            flex-grow: 1;
        }
        .input-group button {
            cursor: pointer;
            background-color: var(--accent-color);
            color: #fff;
            border: none;
            transition: background-color 0.2s;
        }
        .input-group button:hover {
            background-color: #d98d4a;
        }
        .input-row {
            display: flex;
            gap: 10px;
            align-items: center;
        }
        .participants-list ul {
            list-style-type: none;
            padding: 0;
            margin: 0;
        }
        .participants-list li {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 8px 0;
            border-bottom: 1px dashed var(--border-color);
        }
        .participants-list li:last-child {
            border-bottom: none;
        }
        .participants-list .remove-btn {
            background-color: transparent;
            border: none;
            color: #f00;
            font-size: 1.2em;
            cursor: pointer;
            line-height: 1;
        }
        .tracker-area #drawn-token {
            text-align: center;
            margin-bottom: 20px;
            font-size: 1.2em;
            font-weight: bold;
        }
        .tracker-area #current-stack {
            display: flex;
            flex-wrap: wrap;
            gap: 5px;
            min-height: 50px;
            padding: 10px;
            border: 1px dashed var(--border-color);
            border-radius: 4px;
        }
        .tracker-area #current-stack.hidden {
            display: none;
        }
        .token {
            padding: 5px 10px;
            border-radius: 12px;
            background-color: var(--token-bg);
            border: 1px solid var(--token-border);
            font-size: 0.9em;
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
        }
        .player-token { background-color: #c9e2b1; border-color: #a3c98a; }
        .enemy-token { background-color: #f0c9c9; border-color: #d9a3a3; }
        .end-token { background-color: #ccc; border-color: #999; }
        .btn-group {
            display: flex;
            gap: 10px;
            margin-top: 15px;
        }
        .btn-group button {
            flex-grow: 1;
            padding: 12px;
            font-size: 1.1em;
            border-radius: 6px;
            cursor: pointer;
            border: none;
            transition: background-color 0.2s;
        }
        #build-stack-btn { background-color: #5cb85c; color: #fff; }
        #draw-token-btn { background-color: #5bc0de; color: #fff; }
        #reset-round-btn { background-color: #f0ad4e; color: #fff; }
        #build-stack-btn:hover { background-color: #4cae4c; }
        #draw-token-btn:hover { background-color: #46b8da; }
        #reset-round-btn:hover { background-color: #eea236; }
    </style>
</head>
<div id="app-container">
# Troika! Initiative Tracker
initiative stack
<div class="controls">
<h2>1. Add Participants</h2>
<div class="input-group">
<input type="text" id="participant-name" placeholder="Name (e.g., Almon, Goblin, etc.)">
<div class="input-row">
<label for="is-player-checkbox">Is Player Character?</label>
<input type="checkbox" id="is-player-checkbox" checked>
</div>
<input type="number" id="participant-initiative" value="2" min="1" placeholder="Initiative" style="width: 80px;">
<button onclick="addParticipant()">Add to list</button>
</div>
<div class="checkbox-group">
<input type="checkbox" id="enemy-limit-checkbox">
<label for="enemy-limit-checkbox">Use Optional Enemy Initiative Limit (double PC tokens)</label>
</div>
</div>
<div class="participants-list">
<h2>2. Current Participants</h2>
<ul id="participant-list"></ul>
<div class="btn-group">
<button id="build-stack-btn" onclick="buildStack()">Build the Initiative Stack</button>
</div>
</div>
<div class="tracker-area">
<h2>3. Use the Stack</h2>
<div id="drawn-token"></div>
<div class="btn-group">
<button id="draw-token-btn" onclick="drawToken()" disabled>Draw Next Token</button>
<button id="reset-round-btn" onclick="resetRound()" disabled>Reset Round</button>
</div>
<div class="current-stack-display">
<div class="input-row">
<h3>Current Stack:</h3>
<label for="hide-stack-checkbox">Hide Stack View?</label>
<input type="checkbox" id="hide-stack-checkbox">
</div>
<div id="current-stack"></div>
</div>
</div>
</div>
